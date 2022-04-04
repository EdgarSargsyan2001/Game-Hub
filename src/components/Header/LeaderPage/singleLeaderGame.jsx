import {useState} from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));




function SingleLeaderGame({hesAccaunt,DataWiner,title,imgSrc,GAMENAME}){
    
    const [expanded, setExpanded] = useState(false);




    return(

    <Card className='card' sx={{ Width: 345 ,margin:3,padding:3}}>

        <CardHeader 

            sx={{textAlign:"center",color:"red"}}
            title={title}
        
        />


        <CardMedia
            sx={{borderRadius:1}}
            component="img"
            // height="100"
            image={imgSrc}
            alt={imgSrc}
        />
        <CardActions disableSpacing>

            {DataWiner && !expanded &&
                <CardContent sx={{paddingLeft:6}}>
                    
                    <h2 className="winnerName">
                        {
                            hesAccaunt.email === DataWiner[0]?.email ?
                            <span className='YourScore '>Your Score </span> : DataWiner[0]?.email.slice(0,10)
                        
                        }

                        <span className="scoree">
                            :{DataWiner[0]?.[GAMENAME]?.scorre} 
                        </span>
                        
                    </h2>

                    
                </CardContent>
            
            }
               
            <ExpandMore

                expand={expanded}
                onClick={()=>setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-label="show more"

            > <ExpandMoreIcon /></ExpandMore>
            
            
        </CardActions>


        <Collapse in={expanded} timeout="auto" unmountOnExit>

            <ol className='ol'>
            {
                DataWiner &&
                DataWiner.map((el,index)=>{
    
                return <li key={index}>
                        <h2 className="winnerName">

                            {
                                hesAccaunt?.email === el.email ?
                                <span className='YourScore '>Your Score </span>: el.email?.slice(0,el.email.indexOf('@')) 
                            } 

                            <span className="scoree">
                                :{el?.[GAMENAME]?.scorre} 
                            </span> 
                            
                        </h2>

                    </li>
                
                })
                    

            }
            </ol>
        </Collapse>
    </Card>
    )
}
export default SingleLeaderGame