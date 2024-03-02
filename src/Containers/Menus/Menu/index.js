import React from "react";
import { RandomRgbaColor } from "../../../Utils";
const Menu = (props) =>{
    const {name, Icon} = props
    return(
        <>
            <div className="submenu">
                <Icon className="icon" style={{color: RandomRgbaColor(1)}}/>
                <span>{name}</span>
            </div>
        </>
    )
}
export default Menu;