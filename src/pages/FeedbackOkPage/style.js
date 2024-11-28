import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const box = css`
    box-sizing: border-box;
    width: 70%;
    height: 60%;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const thankyouComment = css`
    font-size: 30px;
    font-weight: 600;
`;

export const checkButton = css`
    margin-top: 30px;
    font-size: 30px;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    border: 2px solid rgb(252, 10, 86);
    padding: 10px 200px;
    background-color: rgb(252, 10, 86);
    box-shadow: 5px 5px 5px #898989ff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;