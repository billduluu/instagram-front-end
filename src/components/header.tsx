import React, { useState } from "react";
import "./style.css";
import InstaLogo from "../assets/logos.png";
import { Grid, Avatar, Menu, MenuItem } from "@material-ui/core";
import ProfilePic from "../assets/profile.jpeg";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = () => {
  const [controller, setController] = useState(null);
  const open = Boolean(controller);
  const openMenu = (event: any) => {
    setController(event.currentTarget);
  };
  const handleClose = () => {
    setController(null);
  };
  return (
    <div>
      <div className="navbar__barContent">
        <Grid container>
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={3}>
            <img
              className="navbar_logo"
              src={InstaLogo}
              width="30%"
              alt="instalogo"
            />
          </Grid>
          <Grid item xs={3}>
            <input className="navbar__searchBar" placeholder="Search" />
          </Grid>
          <Grid item xs={3} className="header-icon-menu">
            <Link to={"/timeline"} className="page-link">
              <AiOutlineHome className="icon" />
            </Link>
            <Link to={"/direct"} className="page-link">
              <AiOutlineMessage className="icon" />
            </Link>
            <Link to={"/explore"} className="page-link">
              <MdExplore className="icon" />
            </Link>
            <AiOutlineHeart className="icon" />
            <Avatar
              src={ProfilePic}
              className="navbar__img"
              onClick={openMenu}
            />
            <Menu
              id="basic-menu"
              anchorEl={controller}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to={"/profile"} className="page-link">
                  <IoPersonCircleOutline />
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>Saved</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Switch Account</MenuItem>
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </div>
  );
};
