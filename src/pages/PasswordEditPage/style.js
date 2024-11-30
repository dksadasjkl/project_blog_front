
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

export const contatiner = css`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ciLock = css`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    margin-top: 0;
    margin-bottom: 20px;
    color: rgb(0, 153, 255);
`;

export const inputLayout = css`
    box-sizing: border-box;
    width: 40%;
    height: 40%;
    font-size: 65px;
    outline: none;
    border-radius: 20px;
`;

export const buttonLayout = css`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const button = css`
    box-sizing: border-box;
    background-color: rgb(0, 153, 255);
    font-size: 25px;
    font-weight: 600;
    color: white;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 15px;
    padding: 8px 145px;
    transition: 0.2s all ease-in-out;
    box-shadow: 5px 5px 5px #bdc7ca;
    text-align: center;

    &:active {
        background-color: white;
        color: rgb(0, 153, 255);
    }
`;
