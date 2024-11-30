import { css } from "@emotion/react";

export const layout = css`
    z-index: 99;
    width: 100%;
    height: 100%;
`;

export const header = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const title = css`
    box-sizing: border-box;
    border-bottom: 2px solid #222;
    color: #222;
    width: 90%;
    height: 40%;
    font-size: 40px;
    font-weight: 700;
`;

export const main = css`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const resetLayout = css`
    width: 90%;
    height: 10%;
    display: flex;
    justify-content: right;
    align-items: center;

    & > button {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        font-size: 30px;
        color: #222;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;

        &:active {
            background-color: rgb(0, 153, 255);
            color: white;
        }
    }
`;

export const addLayout = css`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const addBox = css`
    box-sizing: border-box;
    border-top: 2px solid #222;
    border-bottom: 2px solid #222;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const imgLayout = css`
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const imgBox = css`
    width: 80%;
    height: 70%;
    border-radius: 20px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const inputLayout = css`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const inputBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border-left: 2px solid #222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const input = css`
    width: 95%;
    height: 16%;

    & > input {
        box-sizing: border-box;
        background-color: transparent;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        border-bottom: 2px solid #222;
        font-size: 25px;
        padding-left: 10px;
    }

    & > span {
        box-sizing: border-box;
        background-color: transparent;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        border-bottom: 2px solid #222;
        font-size: 25px;
        padding-left: 10px;
        display: flex;
        align-items: center;
    }

    & > span > input {
        border: none;
        outline: none;
        width: 90%;
        height: 90%;
    }

    &:nth-of-type(5) {
        display: flex;
        align-items: center;
        position: relative;
    }
`;

export const inputButton = css`
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background-color: rgb(0, 153, 255);
    color: white;
`;

export const footer = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const buttonLayout = css`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const saveButton = css`
    box-sizing: border-box;
    background-color: rgb(0, 153, 255);
    font-size: 30px;
    font-weight: 600;
    color: white;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 15px;
    padding: 10px 30px;
    transition: 0.2s all ease-in-out;
    margin-left: 20px;

    &:active {
        background-color: white;
        color: rgb(0, 153, 255);
    }
`;