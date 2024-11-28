import { css } from "@emotion/react";

export const layout = css`
    border-radius: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        margin-bottom: 30px;
        font-size: 50px;
        font-weight: 600;
        height: 10%;
        cursor: default;
    }
`;

export const feedbackLayout = css`
    box-sizing: border-box;
    border: 2px solid #dbdbdb;
    border-radius: 30px;
    width: 70%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const feedbackBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const feedbackContents = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;

    & > h1 {
        font-size: 40px;
        margin-bottom: 10px;
        cursor: default;
    }
`;

export const radioButton = css`
    display: flex;
    align-items: center;
    & > input {
        font-size: 20px;
        width: 20px;
        height: 20px;
        -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
        -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
        appearance: none; // 기본 브라우저에서 기본 스타일 제거
        border: 2px solid #ccc; // 체크되지 않았을 때의 테두리 색상
        border-radius: 50%;
        outline: none; // focus 시에 나타나는 기본 스타일 제거
        cursor: pointer;
    }
    & > input[type="radio"]:checked {
        background-color: rgb(252, 10, 86); // 체크 시 내부 원으로 표시될 색상
        border: 3px solid white; // 테두리가 아닌, 테두리와 원 사이의 색상
        box-shadow: 0 0 0 1.6px rgb(252, 10, 86);
    }
    & > label {
        font-size: 35px;
        margin-right: 20px;
        cursor: pointer;
    }
`;

export const checkButton = css`
    margin-top: 30px;
    font-size: 30px;
    font-weight: 600;
    color: rgb(252, 10, 86);
    border-radius: 10px;
    border: 2px solid rgb(252, 10, 86);
    padding: 10px 200px;
    background-color:  white;
    box-shadow: 5px 5px 5px #898989ff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;