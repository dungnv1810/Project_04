import {useState, useEffect} from "react";
export const UseViewPort = () => {
    const [windouwWidth, setWindouwWith] = useState(window.innerWidth || document.documentElement.clientWidth);
    useEffect(() => {
        const handleWindowWith = () => {
            const width = window.innerWidth || document.documentElement.clientWidth;
            setWindouwWith(width)
        }
        handleWindowWith();
        window.addEventListener('resize', handleWindowWith);
        return () => {
            window.removeEventListener('resize', handleWindowWith);
        }
    }, []);
    return(
       [windouwWidth]
    )
}