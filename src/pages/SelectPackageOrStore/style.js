import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    width: 100%s;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const selectWay = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 4px solid rgb(252, 10, 86);
    border-radius: 35px;
    width: 450px;
    height: 550px;
    margin: 50px;
    background-color: rgb(252, 10, 86);
    color: white;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    box-shadow: 10px 10px 5px #bdc7ca;
    cursor: pointer;

    & > :nth-of-type(1) {
        font-size: 160px;
        margin: 40px;
    }
    
    &:hover {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;