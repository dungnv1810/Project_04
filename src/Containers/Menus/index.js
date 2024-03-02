import React from "react";
import Menu from "./Menu";
import { MenusWrapper } from "./style";
import {FaHome, FaHotjar, FaStar} from "react-icons/fa";
import {GiNinjaHeroicStance, GiRomanToga, GiGhost, GiBandageRoll} from "react-icons/gi";
const Menus = () => {
    return(
        <MenusWrapper>
            <Menu Icon={FaHome} name="Home"/>
            <Menu Icon={FaHotjar} name="Trending"/>
            <Menu Icon={FaStar} name="Top rated"/>
            <Menu Icon={GiNinjaHeroicStance} name="Actions Movies"/>
            <Menu Icon={GiRomanToga} name="Comedy Movies"/>
            <Menu Icon={GiGhost} name="Horror Movies"/>
            <Menu Icon={GiBandageRoll} name="Romance Movies"/>
        </MenusWrapper>
    )
}
export default Menus