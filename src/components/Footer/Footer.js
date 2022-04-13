import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function Footer() {
  return (
    <div className="footer-container">
        
      <div className="contact">
      <span className="text">Contact us with </span>
        <a href="https://www.instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <center className="text">Created by ACA students</center>
    </div>
  );
}

export default Footer;
