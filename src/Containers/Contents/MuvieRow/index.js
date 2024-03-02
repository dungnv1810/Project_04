import React, {useState, useEffect, useRef, } from "react";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import { SmoothHorizontalScrolling } from "../../../Utils";
import {UseViewPort} from "../../Hook/UseViewport";
import { MovieWrapper } from "./style";
const MovieRow = (props) => {
    const {movies, title, isNetfFix} = props;

    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDrandDown] = useState(0);
    const [dragMove, setDrandMuve] = useState(0);
    const [isDrag, setInDrag] = useState(false);
    const [windouwWidth] = UseViewPort()
    
    // 
    const handleScrollRight = () => {
        console.log(sliderRef.current.scrollWidth);
        console.log(sliderRef.current.clientWidth);
        const maxSrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        console.log(maxSrollLeft);
        console.log(sliderRef.current.scrollLeft);
        if(sliderRef.current.scrollLeft < maxSrollLeft){
            SmoothHorizontalScrolling(sliderRef.current, 250, 
                sliderRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft)
        }
    }
    const handleScrollLeft = () => {
        console.log(sliderRef.current.scrollLeft)
        if(sliderRef.current.scrollLeft > 0){
            SmoothHorizontalScrolling(sliderRef.current, 250, 
                - sliderRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft)
        }
    }

    // 
    useEffect(()=>{
        if(isDrag){
            if(dragMove < dragDown) handleScrollRight();
            if(dragMove > dragDown) handleScrollLeft();
        }
    },[dragDown, dragMove, isDrag])

    const onDragStart = e => {
        setInDrag(true)
        setDrandDown(e.screenX)
    }
    const onDragEnd = e => {
        setInDrag(false)
    }
    const onDragEnter = e => {
        setDrandMuve(e.screenX)
    }


    return(
        <>
            <MovieWrapper draggable='false'>
                <h1 className="heading">{title}</h1>
                <div className="moviesSlider" 
                        ref={sliderRef} 
                        draggable='true'
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        onDragEnter={onDragEnter}
                        style={
                            movies && movies.length > 0
                            ? {gridTemplateColumns: `repeat(${movies.length},
                                ${windouwWidth > 1200
                                ? '260px' 
                                : windouwWidth > 992
                                ? '200px'
                                : windouwWidth > 768
                                ? '110px' : '100px'}
                            )`} : {}
                        }
                    >
                    {movies.map((item, index)=>{
                        return(
                            <div className="moviesItem" ref={movieRef} draggable='false'>
                                <img src={item} key={index} alt="ảnh lỗi" draggable='false'/>
                                <div className="movieNam">Movie Name</div>
                            </div>
                        )
                    })}
                </div>
                <div className={`btnLeft ${isNetfFix && 'isNetfFix'}`}>
                    <HiChevronLeft onClick={handleScrollLeft} />
                </div>
                <div className={`btnRight ${isNetfFix && 'isNetfFix'}`} onClick={handleScrollRight}>
                    <HiChevronRight/>
                </div>
            </MovieWrapper>
            
        </>
    )
} 
export default MovieRow ;
