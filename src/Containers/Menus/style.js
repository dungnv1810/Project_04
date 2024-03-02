import styled from "styled-components";
export const MenusWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(0,0,0,0.4);
    z-index: 3000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transform-origin: left center;
    transition: all 0.5s linear;
    overflow: hidden;
    &:hover{
        width: 180px;
        background: rgba(0,0,0,0.6);
    }
    .submenu{
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;
    }
    .icon{
        font-size: 30px;
        margin-right: 8px;
    }
    span{
        font-size: 16px;
        font-weight: 400;
        color: rgba(255,255,255,0.6);
        &:hover{
            color: white;
        }
    }
`;