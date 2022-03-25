import Home from "./Home";
import SearchGame from "./SearchGame/SearchGame";
import LoginRegister from "./LoginRegister/LoginRegister";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <Home />
      </Link>
      <Link to="/">
      <SearchGame/>
      </Link>
      <Link to ="/login">
          <LoginRegister/>
      </Link>
    </div>
  );
}

export default Header;
