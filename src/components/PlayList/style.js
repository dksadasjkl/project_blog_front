import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 95%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const listContainer = css`
    height: 100%;
    width: 100%;
    margin-left: 30px;
    box-sizing: border-box;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const listLayout = css`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`;

export const list = (isSeleted) => css`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    padding: 1em;
    background-color: ${isSeleted ? "rgb(252, 10, 86)" : "rgb(43, 43, 43)"};
    position: relative;
    color: white;
    border-radius: 15px;
    font-size: 22px;
    font-weight: 600;
`;

export const contentLayout = css`
    width: 2000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const container = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 90%;
    height: 99%;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const top = css`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: flex-end;
`;

export const mapButton = css`
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
    text-align: center;
    background-color: white;
    font-size: larger;
    border: 1px solid rgb(252, 10, 86);
    box-shadow: 3px 3px 3px #ada8a8;
    color: rgb(252, 10, 86);
    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;
export const bodyContainer = css`
    width: 90%;
    height: 100%;
    margin-left: 25px;
`;

export const name = css`
    width: 100%;
    height: 7%;
    font-size: 35px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 8px;
`;

export const openNow = (boolean) => css`
    box-sizing: border-box;
    color: ${boolean === true ? "rgb(24,112,43)" : "rgb(208,38,41)"};
    font-size: 20px;
    font-weight: 600;
`;

export const text = css`
    width: 100%;
    height: 33px;
    display: flex;
    align-items: center;
    font-size: 18px;
`;
export const star = css`
    color: gold;
    margin-right: 10px;
    font-size: 22px;
`;

export const icon = css`
    color: rgb(0, 153, 255);
    margin-right: 10px;
    font-size: 22px;
`;

export const time = css`
    width: 100%;
    height: 160px;
    padding-top: 7px;
    display: flex;
`;
export const liLayout = css`
    width: 100%;
    height: 160px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    padding-left: 0px;
    font-size: 18px;
    margin: 0;

    & > li {
        margin-bottom: 1px;
    }
`;
export const review = css`
    width: 100%;
    height: 50%;
    border-top: 1px solid #dbdbdb;
    font-weight: 600;
    & > p {
        font-size: 24px;
        margin: 10px 0;
    }
`;
export const reviewLayout = css`
    width: 100%;
    height: 60%;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
        width: 0px;
    }

    list-style: none;
    padding: 0;
    & > li {
        text-align: left;
        border-radius: 20px;
        border-bottom: 15px solid white;
        padding: 13px;
        background-color: #eeeeee77;
        font-weight: 500;
    }
`;