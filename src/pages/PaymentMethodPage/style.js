import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const textbox = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const text = css`
    color: red;
    font-size: 60px;
`;

export const blackText = css`
    color: black;
`;

export const paybox = css`
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const methodLayout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const methodBox = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 30px;
    background-color: rgb(252, 10, 86);
    width: 350px;
    height: 250px;
    font-size: 50px;
    color: white;
    font-weight: 600;
    box-shadow: 5px 5px 5px #898989ff;

    &:active {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;
export const methodBox2 = css`
    border-radius: 30px;
    width: 350px;
    height: 250px;
    font-weight: 600;
    border: none;
    box-shadow: 5px 5px 5px #898989ff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const kakaoButton = css`
    box-sizing: border-box;
    width: 500px;
    border-radius: 30px;
    border: 5px solid rgb(255, 230, 3);
`;

export const buttonBox = css`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const cancel = css`
    border: 2px solid rgb(252, 10, 86);
    border-radius: 15px;
    background-color: white;
    color: rgb(252, 10, 86);
    width: 280px;
    height: 70px;
    font-size: 30px;
    font-weight: 700;
    box-shadow: 5px 5px 5px #898989ff;

    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;