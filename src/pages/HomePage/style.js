import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const buttonLayout = css`
height: 75px;
width: 100%;
display: flex;
justify-content: end;
align-items: center;
`

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
box-shadow: 0px 4px #bdc7ca;
font-size: 16px;
margin-right: 25px;

&:active {
    top:6px;
    box-shadow: 0 0 #c8cfd1;
    background-color: #b5bcbe;
    }
`
export const buttonContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const content = css`
    display: flex; /* Flexbox를 사용하여 내부 요소를 가로로 배열 */
    flex-direction: column; /* 요소를 세로로 배열 */
    align-items: center; /* 세로 중앙 정렬 */
`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 300px;
        height: 300px;
        background-size: fit;
    }
`;

export const text = css`
    font-size: 35px;
    font-weight: 700;
    padding-top: 70px;
`;