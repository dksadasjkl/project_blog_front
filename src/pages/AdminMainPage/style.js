import { css } from "@emotion/react";

export const layout = css`
    z-index: 0;
    position: relative;
    width: 100%; //모니터 기준
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
`;

export const buttonLayout = css`
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 50px;
    margin-top: 20px;
`;

export const backButton = css`
    position: relative;
    width: 50px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #bdc7ca;
    font-size: 16px;
    margin-right: 25px;

    &:active {
        top: 6px;
        box-shadow: 0 0 #c8cfd1;
        background-color: #b5bcbe;
    }
`;
export const buttonContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const boxLayout = css`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const fontLayout = css`
    display: flex;
    width: 100%;
    height: 80px;
    /* padding-bottom: 15px; */
    align-items: center;

    & > :nth-of-type(1) {
        padding-left: 45px;
        padding-top: 8px;
        font-size: 40px;
        font-weight: 600;
        color: #555;
    }
    & > :nth-of-type(2) {
        padding-left: 10px;
        padding-top: 20px;
        font-size: 20px;
        font-weight: 600;
        color: #555;
    }
`;

export const boxContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
`;

export const categoryBox = css`
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #dbdbdb;
    width: 90%;
    height: 300px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 5px #bdc7ca;
`;

export const top3 = css``;