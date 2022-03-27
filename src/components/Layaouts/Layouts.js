import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layouts.css";

export default function Layout(){
    return(
        <div className="layout-container">
            <Header/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
        </div>
    )
}