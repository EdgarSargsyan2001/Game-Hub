import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return ( <div className="footer-container"><div className="contact">
    <a href = "https://www.instagram.com" target = "_blank"><InstagramIcon/></a>
    <a href = "https://www.facebook.com/" target = "_blank"><FacebookIcon/></a>
    <a href = "https://www.linkedin.com/" target = "_blank"><LinkedInIcon/></a>
    <a href = "https://www.youtube.com/" target = "_blank"><YouTubeIcon/></a>
    
    </div></div> );
}

export default Footer;