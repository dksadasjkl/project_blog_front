/**@jsxImportSource @emotion/react */
import SideBar from "../SideBar/SideBar";
import * as s from "./style";

function AdminPageLayout({ children }) {
    return (
        <div css={s.layout}>
            <div css={s.sideBar}>
                <SideBar />
            </div>
            {children}
        </div>
    );
}

export default AdminPageLayout;