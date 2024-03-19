import { css } from "@emotion/react";

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 10px;
    width: 100%;
    height: 50px;
`;

export const menuButton = css`
    box-sizing: border-box;
    border: none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;

    & > * {
        font-size: 16px;
    }
`;

export const accountItems = css`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const account = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 8px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-decoration: none;
    color: #222222;
    cursor: pointer;
`;

export const logout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: none;
    border-radius: 50%;
    padding: 0;
    width: 30px;
    height: 30px;
    overflow: hidden;
    background-color: transparent;
    cursor: pointer;
`;