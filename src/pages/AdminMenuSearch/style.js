import { css } from "@emotion/react";

export const layout = css`
    z-index: 99;
    width: 100%;
    height: 100%;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
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

export const inputLayout = css`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 35px;

    & > div {
        width: 90%;
        height: 100%;
    }

    & > div > input {
        border: none;
        border-radius: 10px;
        border-bottom: 1px solid #dbdbdb;
        width: 50%;
        height: 65%;
        outline: none;
        padding: 10px;
        font-size: 20px;
        font-weight: 500;
        box-shadow: 0px 2px 4px #bdc7ca;
    }
`;

export const searchMenuList = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 80px;
    gap: 20px;
`;