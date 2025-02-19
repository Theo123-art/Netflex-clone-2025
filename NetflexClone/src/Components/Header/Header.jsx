import "./Header.css";
import Netflex from "../../assets/Images/Netflex.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Header = () => {

   return (
     <header className="header">
       {/* Netflix Logo */}
       <div className="logo">
         <img src={Netflex} alt="Netflix Logo" width="100" />
       </div>

       {/* Navigation Links */}
       <nav className="nav-links">
         <ul>
           <li>
             <a href="/">Home</a>
           </li>
           <li className="remvMobileview">
             <a href="/tv-shows">TV Shows</a>
           </li>
           <li className="remvMobileview">
             <a href="/movies">Movies</a>
           </li>
           <li className="remvMobileview">
             <a href="/latest">Latest</a>
           </li>
           <li className="remvMobileview">
             <a href="/my-list">My List</a>
           </li>
           <li className="remvMobileview">
             <a href="/BrowseByLanguages"> Browse by Languages</a>
           </li>
         </ul>
       </nav>

       <div className="headerRight">
         <ul>
           <li>
             <SearchIcon />
           </li>
           <li>
             <NotificationsNoneIcon />
           </li>
           <li>
             <AccountBoxIcon />
           </li>
           <li
           // className="menu-toggle-btn"
           // onClick={() => setMenuOpen(!menuOpen)}
           >
             <ArrowDropDownIcon />
           </li>
         </ul>
       </div>
     </header>
   );
};

export default Header;
