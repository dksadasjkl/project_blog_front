import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: 10px; */
    width: 100%;
    height: 100%;
    position: relative;
`;

export const closeButton = css`
    position: absolute;
    border: none;
    background-color: transparent;
    color: rgb(252, 10, 86);
    font-size: 45px;
    top: 5px;
    right: 5px;
`;