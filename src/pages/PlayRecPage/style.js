import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const textBox = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const highlightText = css`
    color: red;
    font-size: 60px;
`;

export const recText = css`
    color: black;
`;



export const buttonBox = css`
    width: 70%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const buttonLayout = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const rejectButton = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 30px;
    width: 350px;
    height: 250px;
    font-size: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 5px 5px 5px #898989ff;
    background-color: rgb(252, 10, 86);

    &:active {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;

export const acceptButton = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 30px;
    width: 350px;
    height: 250px;
    font-size: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 5px 5px 5px #898989ff;
    background-color: rgb(252, 10, 86);

    &:active {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;