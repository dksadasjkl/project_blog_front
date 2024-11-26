import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const signinBox = css`
    box-sizing: border-box;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 30px;
    background-color: rgb(0, 153, 255);
    padding: 30px 40px;
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px #898989ff;
`;

export const imgBox = css`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const inputInfo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    & > input {
        width: 260px;
        height: 40px;
        border: none;
        border-radius: 10px;
        outline: none;
        font-size: 20px;
        text-align: center;
        padding: 5px 10px;
    }
`;

export const loginButton = css`
    text-decoration: none;
    text-align: center;
    width: 40%;
    margin-top: 15px;
    color: rgb(0, 153, 255);
    font-weight: 700;
    font-size: 20px;
    box-sizing: border-box;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 20px;
    background-color: white;
    padding: 10px 0px;
    box-shadow: 5px 5px 5px #898989ff;
    transition: 0.2s all ease-in-out;

    &:active {
        background-color: rgb(0, 153, 255);
        color: white;
    }
`;