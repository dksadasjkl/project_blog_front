/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import PageModal from "../../components/PageModal/PageModal";



function PlayRecPage() {
    // useAuthCheck();
    const navigate = useNavigate();
    const handleYesClick = () => {
        navigate("/menu/playlist");
    };

    const handleNoClick = () => {
        navigate("/menu/main");
    };
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textBox}>
                    <h1 css={s.highlightText}>
                        관광지 <span css={s.recText}>추천 받기</span>
                    </h1>
                </div>
                <div css={s.buttonBox}>
                    <button css={s.rejectButton} onClick={handleNoClick}>
                        안 받을래요
                    </button>
                    <button css={s.acceptButton} onClick={handleYesClick}>
                        받을래요
                    </button>
                </div>
            </div>
        </PageModal>
    );
}

export default PlayRecPage;