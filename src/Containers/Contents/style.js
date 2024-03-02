import styled from "styled-components";
const movies = [
    "https://image.tmdb.org/t/p/original//f2PVrphK0u81ES256lw3oAZuF3x.jpg",
    "https://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    "https://image.tmdb.org/t/p/original//a91e9hpWwfCqxJI4xM9Q2RhuxgI.jpg",
    "https://image.tmdb.org/t/p/original//1xeiUxShzNn8TNdMqy3Hvo9o2R.jpg",
    "https://image.tmdb.org/t/p/original//49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    "https://image.tmdb.org/t/p/original//m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
    "https://image.tmdb.org/t/p/original//hqmDLY8BSuHmldBuuUwNNt8L45G.jpg",
    "https://image.tmdb.org/t/p/original//AqcHMbvN4lkYUXKNalOxOFe025K.jpg",
    "https://image.tmdb.org/t/p/original//q54qEgagGOYCq5D1903eBVMNkbo.jpg",
    "https://image.tmdb.org/t/p/original//6zUUtzj7aJzOdoxhpiGzEKYtj1o.jpg",
    "https://image.tmdb.org/t/p/original//fLP0mA7FiERZhDP1NJUaHpm6XM8.jpg",
    "https://image.tmdb.org/t/p/original//AninoKw9HranR7ioImNYYA8dMu3.jpg",
    "https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
    "https://image.tmdb.org/t/p/original//6RrseODZo2e66XOzC1XMzMuecnf.jpg",
    "https://image.tmdb.org/t/p/original//dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    "https://image.tmdb.org/t/p/original//8j12tohv1NBZNmpU93f47sAKBbw.jpg",
    "https://image.tmdb.org/t/p/original//reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    "https://image.tmdb.org/t/p/original//dNiI4TdbTb9Mc8ACKQnW9gHCxGZ.jpg",
    "https://image.tmdb.org/t/p/original//fjAAxDPzllwnCMqHDXYlw4IlkaL.jpg",
    "https://image.tmdb.org/t/p/original//dspwDOosidQT85oPDDHMM9zmaLw.jpg"
]
export const MovieWrapper = styled.div`
    background: rgb(17,17,17);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;
    .heading{
        font-size: 18px;
        user-select: none;
    }
    .moviesSlider{
        display: grid;
        grid-template-columns: repeat(${movies.length}, 260px);
        gap: 5px;
        transition: all 0.5s linear;
        user-select: none;
        overflow-y: hidden;
        overflow-x: auto;
        overflow: hidden;
        padding-top: 28px;
        padding-bottom: 28px;
        scroll-behavior: smooth;
        &:hover .moviesItem{
            opacity: 0.5;
        }
        @media screen and (max-width: 1200px) {
            grid-template-columns: repeat(${movies.length}, 200px);
        }
        @media screen and (max-width: 992px) {
            grid-template-columns: repeat(${movies.length}, 110px);
        }
        @media screen and (max-width: 768px) {
            grid-template-columns: repeat(${movies.length}, 100px);
        }
        .moviesItem{
            transform: scale(1);
            max-width: 400px;
            max-height: 500px;
            width: 100%;
            height: 100%;
            transition: all 0.3s linear;
            user-select: none;
            overflow: hidden;
            border-radius: 6px;
            transform: center left;
            position: relative;
            &:hover{
                transform: scale(1.1);
                z-index: 10;
                opacity: 1;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .movieNam{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 4px;
                text-align: center;
                font-size: 14px;
                background-color: rgba(0,0,0,0.65);
            }
        }
    }
    .btnLeft{
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-30%);
        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
        @media screen and (max-width: 1200px) {
            height: 50px;
            width: 25px;
            svg{
                font-size: 40px;
            }
        }
        @media screen and (max-width: 992px) {
            height: 30px;
            width: 20px;
            svg{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 768px) {
            height: 25px;
            width: 15px;
            svg{
                font-size: 15px;
            }
        }
    }
    .btnRight{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-30%);
        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
        @media screen and (max-width: 1200px) {
            height: 50px;
            width: 25px;
            svg{
                font-size: 40px;
            }
        }
        @media screen and (max-width: 992px) {
            height: 30px;
            width: 20px;
            svg{
                font-size: 20px;
            }
        }
        @media screen and (max-width: 768px) {
            height: 25px;
            width: 15px;
            svg{
                font-size: 15px;
            }
        }
    }
`;