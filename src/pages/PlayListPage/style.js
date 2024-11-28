import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 85%;
`;

export const buttonBox = css`
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const cancel = css`
    border: 2px solid rgb(252, 10, 86);
    border-radius: 10px;
    background-color: white;
    color: rgb(252, 10, 86);
    width: 280px;
    height: 70px;
    font-size: 30px;
    font-weight: 700;
    box-shadow: 5px 5px 5px #898989ff;

    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;