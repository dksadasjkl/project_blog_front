import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; // 세로로 세우겠다
    justify-content: center; //가로중간 이거없으면
    align-items: center; //세로중간
`;

export const paybox = css`
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center; //세로중간
`;

export const methodLayout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const methodBox = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 30px;
    background-color: rgb(252, 10, 86);
    width: 350px;
    height: 250px;
    font-size: 25px;
    color: white;
    font-weight: 600;
    box-shadow: 5px 5px 5px #898989ff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;

export const buttonBox = css`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const next = css`
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