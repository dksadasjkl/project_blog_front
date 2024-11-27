import { css } from "@emotion/react";

export const menuLayout = css`
    height: 100%;
    /* & > button:nth-of-type(1) {
        margin-right: 15px;
        margin-bottom: 15px;
    } */
`;

export const menu = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 243px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    cursor: pointer;
    box-shadow: 10px 10px 5px #bdc7ca;

    &:active {
        background-color: #f9d017;
        & > div:nth-of-type(1) {
            background-color: white;
        }
    }
    &:visited {
        background-color: white;
    }
`;

export const imglayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 160px;
    height: 160px;
    font-size: 40px;
    overflow: hidden;
    border-radius: 10px;

    & > img {
        width: 100%;
    }
`;

export const menuListLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const menuFont = css`
    font-size: large;
    color: #3f3f3f;
    margin: 8px 0px;
    font-weight: 600;
    margin-bottom: 4px;
    
`;

export const calFont = css`
    font-size: 14px;
    font-weight: 500;
    color: #898989;
    margin-bottom: 5px;
`;

export const priceFontLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    font-size: 20px;
    color: #898989;
    margin-bottom: 10px;
`;

export const priceFont = css`
    font-size: 18px;
    color: #898989;
`;