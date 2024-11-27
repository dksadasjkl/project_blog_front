import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const orderLayout = css`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
`;

export const orderBox = css`
    /* margin-top: 20px; */
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const orderMenuLayout = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 10px;
    margin-bottom: 12px;

    :last-child {
        border: none;
    }
`;

export const orderInfoBox = css`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1:nth-of-type(1) {
        font-size: 21px;
        margin-left: 20px;
    }

    & > h1:nth-of-type(2) {
        font-size: 19px;
        font-weight: 700;
        margin-right: 20px;
    }
`;

export const orderCountBox = css`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const orderCount = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-left: 20px;
    margin-top: 8px;
    margin-bottom: 6px;

    & > div {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: none;
        border-right: none;
    }

    & > div:nth-of-type(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        background-color: transparent;
        font-size: 20px;
        padding: 5px;
        transition: 0.2s all ease-in-out;

        &:active {
            background-color: rgb(252, 10, 86);
            color: white;
        }

        & > div:nth-of-type(1) {
            border-bottom-left-radius: 10px;
        }
    }
`;

export const removeButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    margin-right: 20px;
    font-size: 30px;
    color: rgb(252, 10, 86);
    padding: 3px;
    transition: 0.2s all ease-in-out;

    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;