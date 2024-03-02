import React, {useState} from "react";
import ReactPlayer from "react-player";
import {IntroWrapper} from "./style";
import {VscMute, VscUnmute} from "react-icons/vsc"
const Intro = (props) => {
    const [inmuted, setInMuted] = useState(false)
    return(
        <>
            <IntroWrapper>
                <ReactPlayer
                    playing={true}
                    loop={true}
                    width="100%"
                    height="100%"
                    volume={1}
                    muted={inmuted}
                    url="https://vimeo.com/254945918"
                    className="videoIntro"
                />
                <div className="infolIntro">
                    <h1 className="heading">NETFLIX The Rain</h1>
                    <p className="overviewIntro">Netflix Elite Launch Campaign Director: Fernanda Weinfeld Production Company: Awake Film Agency: Akqa</p>
                </div>
                {
                    inmuted ? <VscMute className="btnVolume" onClick={()=>setInMuted(prev => !prev)}/> :
                    <VscUnmute className="btnVolume" onClick={()=>setInMuted(prev => !prev)}/>
                }
                <div className="boxShadow">

                </div>
            </IntroWrapper>
        </>
    )
}
export default Intro;