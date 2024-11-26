/**@jsxImportSource @emotion/react */
import * as s from "./style";

function PageLayout({ children }) {
    return <div css={s.layout}>{children}</div>;
}

export default PageLayout;