import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const signupBox = css`
    box-sizing: border-box;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 30px;
    background-color: rgb(0, 153, 255);
    padding: 50px;
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px #898989ff;

    & > h1 {
        font-size: 60px;
        color: white;
        font-weight: 700;
    }
`;

export const inputInfo = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;

    & > input {
        width: 150px;
        height: 30px;
    }
`;

export const signupButton = css`
    margin-top: 30px;
    color: rgb(0, 153, 255);
    font-weight: 700;
    font-size: 30px;
    box-sizing: border-box;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 20px;
    background-color: white;
    padding: 20px 190px;
    box-shadow: 5px 5px 5px #898989ff;

    &:active {
        background-color: rgb(0, 153, 255);
        color: white;
    }
`;