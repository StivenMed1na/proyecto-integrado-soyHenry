import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import styled from "./Nav.module.css"
import { NavLink } from "react-router-dom";

const NavLinkMe = ({to, children, ...props}) => {
   return (
      <NavLink {...props}
         to={to}
         className={({isActivate}) => isActivate ? styled.active : styled.diseable} >
         {children}
      </NavLink>
   )
}

export default function Nav(props) {
    return (
       <div className={styled.container}>
         <NavLinkMe to="/about">About</NavLinkMe>
         <NavLinkMe to="/home">Home</NavLinkMe>
         
            <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
       </div>
    );
 }