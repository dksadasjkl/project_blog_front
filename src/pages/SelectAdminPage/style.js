import { css } from "@emotion/react"; 

export const layout = css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const buttonLayout = css`
height: 35px;
width: 100%;
display: flex;
justify-content: end;
align-items: center;
margin-right: 50px;
margin-top: 20px;
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
box-shadow: 5px 5px 5px #bdc7ca;
font-size: 16px;

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

export const selectWay = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 4px solid rgb(252, 10, 86);
    border-radius: 35px;
    width: 450px;
    height: 550px;
    margin: 50px;
    background-color: rgb(252, 10, 86);
    color: white;
    font-size: 120px;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    box-shadow: 10px 10px 5px #bdc7ca;
    cursor: pointer;

    &:nth-of-type(1) {
        background-color: rgb(0, 153, 255);
        border: 4px solid rgb(0, 153, 255);
    }

    & > h1 {
        font-size: 70px;
    }

    &:hover {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;