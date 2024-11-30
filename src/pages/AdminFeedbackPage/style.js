import { css } from "@emotion/react";

export const layout = css`
    z-index: 0;
    position: relative;
    width: 100vw; //모니터 기준
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
`;

export const header = css`
    width: 100%;
    height: 164px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const title = css`
    box-sizing: border-box;
    border-bottom: 2px solid #222;
    color: #222;
    width: 90%;
    height: 65px;
    font-size: 40px;
    font-weight: 700;
`;

export const feedbackGraphLayout = css`
    width: 100%;
    height: 280px;
`;

export const commentLayout = css`
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const commentBox = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const comment = css`
    width: 60%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcedd7;
    border-radius: 30px;
    font-size: 25px;
    margin-right: 25px;
    margin-bottom: 15px;
`;

export const textBox = css`
    width: 90%;
    height: 90%;
    background-color: #fcedd7;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    font-size: 25px;
    font-weight: 700;
`;

export const searchBoxLayout = css`
padding-top: 30px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
`;

export const searchBox = css`
    margin-left: 18px;
    width: 87%;
    height: 400px;
    border: 1px solid #4d4d4d;
    border-radius: 30px;
    background-color: white;
    box-shadow: 10px 10px 5px #bdc7ca;
`

export const top = css`
    background-color: #fafafa;
    width: 100%;
    height: 8%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4d4d4d;
`;

export const circle = css`
    padding-left: 13px;
    &:nth-of-type(1) {
        color: red;
    }
    &:nth-of-type(2) {
        color: gold;
    }
    &:nth-of-type(3) {
        color: green;
    }
`;
export const searchLayout = css`
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    width: 100%;
    height: 400px;
`;

export const search = css`
    width: 100%;
    height: 340px;
    display: flex;
    flex-direction: column;
`;

export const askTitle = css`
    list-style-type: none;
    background-color: #58a6ee;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90;
    height: 30px;
    margin-top: 0;
    margin-bottom: 0;
    color: white;
    padding-left: 0;

    & > li {
        text-align: center;
    }

    & > li:nth-of-type(1) {
        width: 15%;
    }
    & > li:nth-of-type(2) {
        width: 20%;
    }
    & > li:nth-of-type(3) {
        width: 20%;
    }
    & > li:nth-of-type(4) {
        width: 20%;
    }
    & > li:nth-of-type(5) {
        width: 25%;
    }
`;

export const listLayout = css`
    width: 100%;
    height: 400px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 13px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #aae0ff;
        background-clip: padding-box;
        border: 3px solid transparent;
        border-radius: 8px;
    }
`;

export const askList = css`
    list-style-type: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8%;
    color: #333;
    padding-left: 0;

    & > li {
        text-align: center;
    }

    & > li:nth-of-type(1) {
        width: 15%;
    }
    & > li:nth-of-type(2) {
        width: 20%;
    }
    & > li:nth-of-type(3) {
        width: 20%;
    }
    & > li:nth-of-type(4) {
        width: 20%;
    }
    & > li:nth-of-type(5) {
        width: 25%;
    }
`;