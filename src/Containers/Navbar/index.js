import React, {useState, useEffect} from "react";
import {ImSearch} from "react-icons/im"
import { useScrolly } from "../Hook";
import logo from "../../Assets/Images/logo.png";
import { NavbarWrapper } from "./style";
const Navbar = (props) => {
    const [scrollY] = useScrolly();
    return(
        <>
            <NavbarWrapper style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background)'}}>
                <div className="navContainer">
                    <div className="logo">
                        <img src={logo} alt="ảnh lỗi"/>
                    </div>
                    <div className="navSearch">
                        <ImSearch className="iconSearch"/>
                        <input type="text" placeholder="Input title, people"/>
                    </div>
                </div>
            </NavbarWrapper>
        </>
    )
}
export default Navbar;