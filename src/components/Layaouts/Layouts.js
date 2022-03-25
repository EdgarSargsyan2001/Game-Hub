import {Link,Outlet} from "react-router-dom";
import Header from "../Header/Header";
import "./layouts.css";

export default function Layout(){
    return(
        <div className="layout-container">
            <Header/>
            <nav className="layout-nav">
                <Link to="games">Games</Link>
            </nav>
        <div>
            <Outlet/>
        </div>
        </div>
    )
}