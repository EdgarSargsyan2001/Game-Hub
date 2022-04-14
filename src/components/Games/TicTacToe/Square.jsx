import React from "react";


export default function Square({ClickedArray,handelClick,player,winComb,alonegame}){

                    

if(!player || alonegame){
      return(
      <div className="board">
          {   
          ClickedArray.map( (item,index) => {
              if(item === ""){ 
                  return ( 
                  <div
                      key={index}
                      className='Square' onClick={(evt)=>handelClick(index,evt)}
                  >
  
                      {item}
                  </div>
                  )
              }else{
                  return <div key={index} className="Square"> {item} </div>
              }
          })
          }
      </div>
      )
    
}else{

    const Xarr = []
    const Oarr = []
    const NUMarr = []
    let flag = true

    let arr = ClickedArray.map(function (el,index){
        
        if(el === "X") return el + index
        if(el === "O") return el + index
        return index
    })
    
    arr.forEach( el => {
        if(el[0] === "X" ){

            Xarr.push(+el[1])
        }
        else if(el[0] === "O"){

            Oarr.push(+el[1])
        }else {

            NUMarr.push(el)
        }       
            
    })
    

    
for(let i = 0; i < 8; i++){

    if(( winComb[i].includes(Oarr[0]) && winComb[i].includes(Oarr[1]) ) || ( winComb[i].includes(Oarr[0]) && winComb[i].includes(Oarr[2]) ) || ( winComb[i].includes(Oarr[1]) && winComb[i].includes(Oarr[2]) )){
       
        let nowOod = winComb[i].filter(( el => (el === Oarr[0] || el === Oarr[1] || el === Oarr[2]) ? false : true ))
                            
    
        
        if( !Xarr.includes(parseInt(nowOod)) ) { 
            handelClick(parseInt(nowOod))
            flag = false
            break 
        } 
    }
}
     
    
    
 if(flag){
    for(let i = 0; i < 8; i++){
    
        if( ( winComb[i].includes(Xarr[0]) && winComb[i].includes(Xarr[1]) ) || ( winComb[i].includes(Xarr[0]) && winComb[i].includes(Xarr[2]) ) || ( winComb[i].includes(Xarr[1]) && winComb[i].includes(Xarr[2]) ) ){
           
           let nowXod = winComb[i].filter((el=> (el === Xarr[0] || el === Xarr[1] || el === Xarr[2]) ? false : true ))
                                
        
           
            if( !Oarr.includes(parseInt(nowXod)) ) {
                handelClick(parseInt(nowXod));
                break ;
            }

        }
         
        if(i === 7){
            handelClick(parseInt(NUMarr[parseInt(Math.random() * NUMarr.length)]))   
            break
        }
        
    }
}



 
 return(
        <div className="board">
      
      </div>
 )

}

}