import { css } from "@emotion/react";

export const container = css`
    width: 20%;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    box-shadow: 1px 0px 5px #00000022;
`;

export const link = css`
    display: flex;
    margin-top: 15px;
    text-decoration: none;
    cursor: pointer;
    color: #333;
    font-size: 20px;
`;

export const link2 = css`
    display: flex;
    margin-top: 15px;
    text-decoration: none;
    cursor: pointer;
    color: #333;
    font-size: 20px;
`;

export const homeLayout = css`
    display: flex;
    align-items: center;
    width: 70%;
    height: 100px;
`;

export const home = css`
    margin: 0;
    font-size: 40px;
    font-weight: 700;
    color: #222;
    text-decoration: none;
    cursor: pointer;
`;

export const font = css`
    width: 100%;
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    padding-top: 15px;
    border-top: 1px solid #dbdbdb;
`;

export const salesLayout = css`
    width: 80%;
    height: 120px;
`;

export const menuLayout = css`
    width: 80%;
    height: 160px;
`;

export const feedbackLayout = css`
    width: 80%;
    height: 130px;
`;

export const userLayout = css`
    width: 80%;
    height: 130px;
`;
export const imgLayout = css`
    width: 80%;
    height: 130px;
`;