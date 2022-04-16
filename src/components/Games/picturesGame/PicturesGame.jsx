import { useEffect, useRef, useState } from "react";
import { collection, getDocs, getFirestore,doc, setDoc} from "firebase/firestore";

import uniqueCardsArray from "./data.js";
import PicturCard from './picturCard/index';
import Finish from './Finish/index';
import HeaderPictur from './Header1/index';
import { async } from "@firebase/util";



// FisherYates Modern Shuffle Algorithm
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

const PicturesGame = ({accauntData,hesAccaunt,db}) => {

  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpencards] = useState([]);
  const [matchedCards, setMatchedcards] = useState({});
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [bestScore1, setBestScore1] = useState(accauntData?.PicturesGame?.scorre ? accauntData.PicturesGame.scorre : 0);
  const timeout = useRef(null);


  useEffect(async()=>{
    if( hesAccaunt){
      
      const db = getFirestore()
      const querySnapshot = await getDocs(collection(db, "users"));
      let newData

      querySnapshot.forEach((doc) => {
          if(doc.id === hesAccaunt.uid){

              newData = {...doc.data(),id:doc.id,email:hesAccaunt.email}
                  
          }
      })
      setBestScore1(newData?.PicturesGame?.scorre ? newData?.PicturesGame?.scorre : 0)
    }
  },[moves])

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(matchedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore1);
      setBestScore1(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setMatchedcards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpencards([]);
      // alert("you have found a match");
      return;
    }
    timeout.current = setTimeout(() => {
      setOpencards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpencards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpencards([index]);
    }
  };
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [openCards]);

  useEffect(() => {
    // eslint-disable-next-line
    checkCompletion();
    // eslint-disable-next-line
  }, [matchedCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  const checkIsInactive = (card) => {
    return Boolean(matchedCards[card.type]);
  };
  const handleRestart = () => {
    if(hesAccaunt){
      if(accauntData?.PicturesGame?.scorre){

        if(moves < accauntData?.PicturesGame?.scorre){
          
          setDoc(doc(db, "users", hesAccaunt?.uid), {
            ...accauntData,
            email:hesAccaunt.email,
            PicturesGame:{scorre:moves},
            
          });
        }
      }else{
        setDoc(doc(db, "users", hesAccaunt?.uid), {
          ...accauntData,
          email:hesAccaunt.email,
          PicturesGame:{scorre:moves},
          
        });
      }

    }
    setMatchedcards({});
    setOpencards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };

  return (
    <div className="mainDiv">
      <HeaderPictur
        moves={moves}
        bestScore={bestScore1}
        handleRestart={handleRestart}
      />
      <div className="all-div">
        
          {cards.map((card, index) => {
            return (
              <div className="inputCard">
                <PicturCard
                  key={index}
                  card={card}
                  index={index}
                  isDisabled={shouldDisableAllCards}
                  isInactive={checkIsInactive(card)}
                  isFlipped={checkIsFlipped(index)}
                  onClick={handleCardClick}
                />
              </div>
            );
          })}
        
      </div>
      <Finish
        showModal={showModal}
        moves={moves}
        bestScore={bestScore1}
        handleRestart={handleRestart}
      />
    </div>
  );
};

export default PicturesGame;
