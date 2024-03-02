import { useState, useEffect } from "react";
export function useScrolly () {
    const [scrollY, setscrollY] = useState(0)
    const handleScrolly = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setscrollY(scrollY)
    }

    useEffect(() => {
        handleScrolly();
        window.addEventListener('srolly',handleScrolly);
        return() => {
            window.removeEventListener('srolly',handleScrolly)
        }
    }, []);
    return([scrollY])
}
