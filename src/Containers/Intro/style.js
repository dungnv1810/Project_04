import styled from "styled-components";
export const IntroWrapper = styled.div`
    width: 100%;
    background: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top: 56%;
    .videoIntro{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .infolIntro{
        position: absolute;
        top: 140px;
        left: 30px;
        z-index: 1500;
        @media screen and (max-width: 800px) {
            top: 120px;
            left: 25px;
        }
        @media screen and (max-width: 600px) {
            top: 100px;
            left: 15px;
        }
        .heading{
            font-size: 60px;
            transition: all 0.3s ease;
            @media screen and (max-width: 800px) {
                font-size: 40px;
            }
            @media screen and (max-width: 600px) {
                font-size: 24px;
            }
        }
        .overviewIntro{
            max-width: 550px;
            height: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;
            @media screen and (max-width: 800px) {
                font-size: 16px;
                max-width: 450px;
                padding-top: 15px;
            }
            @media screen and (max-width: 600px) {
                font-size: 14px;
                max-width: 350px;
                padding-top: 5px;
            }
        }
    }
    .btnVolume{
        position: absolute;
        height: 40px;
        width: 40px;
        right: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: #fff solid 1px;
        transition: all 0.3s ease;
        transform: scale(1);
        &:hover{
            color: #fff;
            transform: scale(1.2);
            background: rgba(211,211,211,0.8);
        }
        @media screen and (max-width: 800px) {
            height: 30px;
            width: 30px;
            padding: 4px;
        }
        @media screen and (max-width: 600px) {
            height: 20px;
            width: 20px;
            padding: 1px;
            
        }
    }
    .boxShadow{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(20, 20, 20, 0.8) 40%,
            rgb(17, 17, 17),
            rgb(17, 17, 17)
        );
    }
`;