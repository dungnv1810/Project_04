import styled from "styled-components";
export const NavbarWrapper = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 2000;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1;
    @media only screen and (max-width: 600px){
        height: 100px;
    }  
    .navContainer{
        background-color: var(--color-background);
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;

        @media only screen and (max-width: 600px){
            flex-direction: column;
        }
        .logo{
            width: 120px;
            height: auto;
            cursor: pointer;
            img{
                width: 100%;
            }
        }  
        .navSearch{
            color: var(--color-white);
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;
            &:hover .iconSearch{
                color: var(--color-white);
            }
            .iconSearch{
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb;
            }
            input{
                font-size: 14px;
                border: none;
                color: var(--color-white);
                outline: none;
                width: 0;
                padding: 10px;
                border: 1px solid #fff;
                cursor: pointer;
                opacity: 0;
                background-color: #222;
                transition: width 0.5s;
                &:focus{
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        } 
    }
`;