

    function SingleLeaderGame({DataWiner,title,imgSrc}){

        return(

            <div className='Winner'>
                <h1>{title}</h1>
                <img src={imgSrc} className='img'></img>
                <h1 className="scoree">high score : {DataWiner?.RockPaperScissors?.scorre} </h1>
                <h1 className="winnerName">winner <p>{DataWiner?.email}</p></h1>
            </div>
        )

    }


    export default SingleLeaderGame