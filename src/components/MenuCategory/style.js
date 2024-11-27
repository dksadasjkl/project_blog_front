import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const header = css`
    height: 40%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const menuFont = css`
    font-size: 45px;
    font-weight: 700;
    color: #222;
    cursor: default;
`;

export const categoryFont = css`
    margin-left: 5px;
    font-size: 45px;
    font-weight: 300;
    color: #222;
    cursor: default;
`;

export const categoryLayout = css`
    box-sizing: border-box;
    width: 610px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    justify-content: space-between;
`;