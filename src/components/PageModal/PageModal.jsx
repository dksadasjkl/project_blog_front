/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";

function PageModal({ children }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(() => true);
        return () => {
            setShow(() => false);
        };
    }, []);
    return (
        <>
            <div css={s.layout(show)}>
                <div css={s.modal}>{children}</div>
            </div>
        </>
    );
}

export default PageModal;