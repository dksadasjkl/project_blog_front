import { css } from "@emotion/react";

export const categoryLayout = css`
    height: 100%;
    & > button:nth-of-type(1) {
        margin-right: 15px;
    }

    & > input[type="radio"]:checked + label {
        background-color: #fcd93c;
        & > div:nth-of-type(1) {
            background-color: white;
        }
    }
`;

export const category = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 150px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    padding-top: 10px;
    cursor: pointer;
    box-shadow: 10px 10px 5px #bdc7ca;
`;

export const imglayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 15px;
    font-size: 50px;
`;

export const categoryTitleLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const categoryfont = css`
    margin-top: 5px;
    font-size: 24px;
    color: #898989;
`;