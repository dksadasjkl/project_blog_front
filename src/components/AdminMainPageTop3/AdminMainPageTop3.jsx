/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import { FaCrown } from "react-icons/fa6";

function AdminMainPageTop3({ img, menuName, index }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.lankingContainer}>
                    <h1 css={s.font}><FaCrown css={s.icon(index)}/> {index + 1}위</h1>
                    <div css={s.top3}><img src={img} alt="" /></div>
                    <h1 css={s.menu}>{menuName}</h1>
                </div>
            </div>
        </div>
    );
}

export default AdminMainPageTop3;