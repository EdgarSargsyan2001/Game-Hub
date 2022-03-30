import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layouts.css";

// import '../Games/RockPaperScissors/imagesRockPaperScissors/rock'

export default function Layout({hesAccaunt,setHasAccount,setAccauntData}){
    return(
        <div className="layout-container">

            <Header 

                hesAccaunt={hesAccaunt}
                setHasAccount={setHasAccount}
                setAccauntData={setAccauntData}

            />
            
                <div className="Outlet">

                    <Outlet/>

                </div>


            <Footer/>
        </div>
    )
}