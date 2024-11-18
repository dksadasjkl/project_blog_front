import { css } from "@emotion/react";

export const footer = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    border-top: 1px solid #dbdbdb;
    padding: 10px 10px;
    width: 100%;
    height: 200px;

    & a {
        text-decoration: none;
        color: black;
        font-weight: 600;
        transition: all 0.3s;

        &:hover{
            color: rgb(255, 64, 129);
        }
    }
`;

export const logo = css`
    width: 100px;
    height: 50px;
    background-color: red;
    opacity: 0.8;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export const spanContent = css`
    font-weight: 600;
`;