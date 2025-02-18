import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightTwoToneIcon from "@mui/icons-material/CopyrightTwoTone";
const Footer = () => {
  return (
    <div className="Footerwraper">
      <div className="InnerFooterWraper">
        <div className="firstColumn">
          <div className="incons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
              <li className="serviceCode">Service Code</li>
            </ul>
          </div>
        </div>

        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="copywrite">
        <CopyrightTwoToneIcon />
        1997-2024 Netflex Inc.
      </div>
    </div>
  );
};

export default Footer;
