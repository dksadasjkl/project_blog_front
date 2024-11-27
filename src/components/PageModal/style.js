import { css } from "@emotion/react";

export const layout = (show) => css`
    opacity: ${show ? 1 : 0};
    width: 100%;
    height: 100%;
    background-color: #33333399;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
`;

export const modal = css`
    width: 95%;
    height: 95%;
    background-color: white;
    border-radius: 30px;
`;