/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { menuState } from "../../atoms/menuAtom";

function RootLayout({ children }) {
    return (
        <>
            <div css={s.background}>
                <div css={s.layout} >
                    {children}
                </div>
            </div>
        </>
    );
}

export default RootLayout;