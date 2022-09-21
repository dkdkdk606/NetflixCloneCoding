import "./navbar.scss"
import React from 'react';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
    const [isScorlled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScorlled);
  return (
    <div className = "navbar">
        <div className="container">
            <div className="left">
                <img src={ require("./netflixlogo.png")} alt="" 
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>

            <div className="right">
                <SearchIcon className="icon"/>
                <span>KID</span>
                <NotificationsIcon className="icon"/>
                <img src={ require("./netflixlogo.png")} alt="" 
                />
                <div className="profile">
                    <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
                
            </div>
        </div>
        
    </div>
  )
}

export default Navbar