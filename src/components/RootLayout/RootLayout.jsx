/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { menuState } from "../../atoms/menuAtom";

function RootLayout({ children }) {
    const [ show, setShow ] = useRecoilState(menuState);

    const handleBackgroundClick = (e) => {
        setShow(() => false);
    }

    return (
        <>
            <div css={s.background}></div>
            <div css={s.layout} onClick={handleBackgroundClick}>
                {children}
            </div>
        </>
    );
}

export default RootLayout;