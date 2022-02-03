import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import("./Header.css");

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className="header__logo"
          src="https://stratmarques.com/wp-content/uploads/2019/05/Gmail-logo-color.jpg"
          alt="gmail logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input className="header__input" type="text" placeholder="Search" />
        <ArrowDropDownIcon />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={user?.photoUrl} onClick={signOut} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
