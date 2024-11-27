import { css } from "@emotion/react";

export const categoryLayout = css`
    height: 100%;
    & > button:nth-of-type(1) {
        margin-right: 15px;
    }
`;

export const category = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 170px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    cursor: pointer;
    box-shadow: 10px 10px 5px #bdc7ca;

    &:hover {
        background-color: #fcd93c;
        & > div:nth-of-type(1) {
            background-color: white;
        }
    }
    &:active {
        background-color: #f9d017;
        & > div:nth-of-type(1) {
            background-color: white;
        }
    }
`;

export const imglayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 120px;
    height: 120px;
    border-radius: 15px;
    font-size: 60px;
`;

export const categoryTitleLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
`;

export const categoryfont = css`
    font-size: 35px;
    color: #898989;
`;