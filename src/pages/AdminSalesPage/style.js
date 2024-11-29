import { css } from "@emotion/react";

export const layout = css`
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const salesCharts = css`
    margin-bottom: 10px;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const toggleSwitch = css`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > div > div {
        margin: 0 10px;
        font-size: 25px;
        font-weight: 600;
    }
`;

export const chartBox = css`
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    width: 90%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 7px 7px 5px #bdc7ca;
`;

export const line = css`
    width: 90%;
    margin-top: 30px;
    box-sizing: border-box;
    border-top: 2px solid #22222255;
`;

export const menuList = css`
    height: 30%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 80px;
    margin-top: 40px;
    gap: 20px;
`;