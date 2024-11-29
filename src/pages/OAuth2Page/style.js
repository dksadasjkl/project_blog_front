import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const container = css`
    width: 50%;
    height: 60%;
    box-sizing: border-box;
    background-color: rgb(0, 153, 255);
    box-shadow: 5px 5px 5px #898989ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 25px;
`;

export const box = css`
    margin: 10px;
    width: 70%;

    & > h1 {
        font-size: 50px;
        padding: 0;
        margin: 0;
    }
    & > p {
        font-size: 20px;
    }
`;

export const oauth2Button = css`
    width: 400px;
    height: 50px;
    background-color: white;
    border: none;
    border-radius: 15px;
    box-shadow: 5px 5px 5px #898989ff;
    font-size: 20px;
    font-weight: 600;
    color: black;
`;