import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const textbox = css`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const text = css`
    font-size: 60px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const phoneNumberLayout = css`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const phoneNumberInput = css`
    width: 49.8%;
    height: 22%;
    border: 2px solid rgb(252, 10, 86);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size: 45px;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 2px solid rgb(252, 10, 86);
`;

export const tableContainer = css`
    width: 50%;
    border-collapse: collapse;
    border-radius: 15px;
    border-style: hidden;
    box-shadow: 0 0 0 0.5 rgb(252, 10, 86);
`;

export const table = css`
    box-sizing: border-box;
    width: 90px;
    height: 100px;
    border-left: 20px;
    text-align: center;
    justify-content: center;
    overflow: hidden;
`;

export const number = css`
    height: 100%;
    width: 100%;
    border: none;
    font-size: 40px;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(252, 10, 86);
    transition: 0.2s all ease-in-out;

    &:active {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;

export const trBox = css`
    & > td:nth-of-type(1) {
        border-bottom-left-radius: 15px;
    }
    & > td:nth-of-type(3) {
        border-bottom-right-radius: 15px;
    }
`;

export const buttonLayout = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const buttonBox = css`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button {
        font-size: 30px;
        font-weight: 600;
        color: rgb(252, 10, 86);
        border: 2px solid rgb(252, 10, 86);
        padding: 15px 40px;
        border-radius: 15px;
        box-shadow: 5px 5px 5px #898989ff;
        background-color: white;
        transition: 0.2s all ease-in-out;

        &:active {
            color: white;
            background-color: rgb(252, 10, 86);
        }
    }
`;