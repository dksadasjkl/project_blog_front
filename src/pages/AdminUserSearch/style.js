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

export const searchBoxLayout = css`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const searchBox = css`
    width: 80%;
    height: 100%;
    border: 1px solid #4d4d4d;
    border-radius: 30px;
    background-color: white;
    box-shadow: 10px 10px 5px #bdc7ca;
`;

export const top = css`
    position: relative;
    background-color: #fafafa;
    width: 100%;
    height: 8%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4d4d4d;

    & > input {
        position: absolute;
        border-radius: 6px;
        border: 1px solid #dbdbdb;
        outline: none;
        right: 15px;
        width: 200px;
        height: 20px;
        font-size: 20px;
        padding: 5px;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
`;

export const circle = css`
    padding-left: 13px;
    &:nth-of-type(1) {
        color: red;
    }
    &:nth-of-type(2) {
        color: gold;
    }
    &:nth-of-type(3) {
        color: green;
    }
`;
export const searchLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`;

export const search = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const askTitle = css`
    list-style-type: none;
    background-color: #58a6ee;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90;
    height: 8%;
    margin-top: 0;
    margin-bottom: 0;
    color: white;
    padding-left: 0;

    & > li {
        text-align: center;
    }

    & > li:nth-of-type(1) {
        width: 15%;
    }
    & > li:nth-of-type(2) {
        width: 20%;
    }
    & > li:nth-of-type(3) {
        width: 20%;
    }
    & > li:nth-of-type(4) {
        width: 20%;
    }
    & > li:nth-of-type(5) {
        width: 25%;
    }
    & > li:nth-of-type(6) {
        width: 15%;
    }
`;

export const listLayout = css`
    width: 100%;
    height: 90%;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 13px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #aae0ff;
        background-clip: padding-box;
        border: 3px solid transparent;
        border-radius: 8px;
    }
`;

export const askList = css`
    list-style-type: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8%;
    color: #333;
    padding-left: 0;

    & > li {
        text-align: center;
    }

    & > li:nth-of-type(1) {
        width: 15%;
    }
    & > li:nth-of-type(2) {
        width: 20%;
    }
    & > li:nth-of-type(3) {
        width: 20%;
    }
    & > li:nth-of-type(4) {
        width: 20%;
    }
    & > li:nth-of-type(5) {
        width: 25%;
    }
    & > li:nth-of-type(6) {
        width: 15%;
        display: flex;
        justify-content: center;
        & > button {
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background-color: transparent;
            color: red;
        }
    }
`;