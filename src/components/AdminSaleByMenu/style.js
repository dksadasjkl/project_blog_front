import { css } from "@emotion/react";

export const layout = css`
    z-index: 90;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const header = css`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const title = css`
    padding-bottom: 10px;
    box-sizing: border-box;
    border-bottom: 2px solid #222;
    color: #222;
    width: 90%;
    font-size: 40px;
    font-weight: 700;
`;

export const main = css`
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const chartLayout = css`
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const chartBox = css`
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const toggleSwitch = css`
    display: flex;
    align-items: center;

    & > div {
        font-size: 25px;
        font-weight: 600;
        margin: 0 10px;
    }
`;

export const toggleSwitchLayout = css`
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

export const menuInfo = css`
    width: 85%;
    height: 20%;
    display: flex;
    align-items: center;
`;

export const imgBox = css`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 2px solid #dbdbdb;

    & > img {
        width: 100%;
    }
`;

export const infoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    width: 80%;
    height: 100%;

    & > div {
        font-size: 25px;
        padding: 3px 0;
    }
`;

export const buttonLayout = css`
    width: 90%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const cancel = css`
    outline: none;
    background-color: rgb(0, 153, 255);
    font-size: 30px;
    font-weight: 600;
    color: white;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 15px;
    padding: 10px 30px;

    &:active {
        background-color: white;
        color: rgb(0, 153, 255);
    }
`;