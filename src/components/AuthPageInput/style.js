import { css } from "@emotion/react";

export const inputBox = css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const input = css`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 23px;
    padding: 5px 10px;

    &:hover {
        background-color: #dbdbdb;
    }
`;

export const messageBox = (type) => css`
    display: flex;
    justify-content: center;
    padding: ${type === "error" ? "5px 0px" : 0};
    width: 100%;
    color: ${type === "error" ? "white" : "#00921b"};
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-right: 20px;
`;

export const inputIcon = (type) => {
    if (type !== "error") {
        return css`
            position: absolute;
            font-size: 20px;
            transform: translateY(-50%);
            top: 55%;
            right: 15px;
            color: #00921b;
        `;
    }
    return css`
        margin-right: 10px;
        font-size: 20px;
        color: white;
    `;
};