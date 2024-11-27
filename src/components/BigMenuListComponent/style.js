import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const header = css`
    height: 20%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-left: 30px;
`;

export const chooseFont = css`
    padding-right: 5px;
    font-size: 60px;
    font-weight: 700;
    color: #222;
    cursor: default;
`;

export const orderFont = css`
    padding-left: 5px;
    font-size: 60px;
    font-weight: 300;
    color: #222;
    cursor: default;
`;

export const menuListLayout = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    padding-left: 30px;
    height: 100%;
    width: 100%;
`;

export const menuListBox = css`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
`;