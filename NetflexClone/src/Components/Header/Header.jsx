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
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tv-shows">TV Shows</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/latest">Latest</a>
          </li>
          <li>
            <a href="/my-list">My List</a>
          </li>
          <li><a href="/BrowseByLanguages" > Browse by Languages</a></li>
        </ul>
      </nav>

      {/* Search Bar
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div> */}

      {/* User Profile Icon */}
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
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
