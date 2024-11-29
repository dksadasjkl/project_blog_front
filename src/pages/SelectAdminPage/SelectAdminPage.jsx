/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";

function SelectAdminPage(props) {
    // useAuthCheck();
    const navigate = useNavigate();
    const handleAdminButtonClick = () => {
        navigate("/admin/main");
    };
    const handleUserButtonClick = () => {
        navigate("/menu/main");
    };
    const handlebackButtonClick = () => {
        navigate("/");
    };
    
    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.buttonLayout}>
                    <button css={s.backButton} onClick={handlebackButtonClick}><TbArrowBigLeftFilled /></button>
                </div>
                <div css={s.buttonContainer}>
                    <button css={s.selectWay} onClick={handleAdminButtonClick}>
                        <FaUserGear />
                        <h1>관리자 모드</h1>
                    </button>
                    <button css={s.selectWay} onClick={handleUserButtonClick}>
                        <MdOutlineTableRestaurant />
                        <h1>사용자 모드</h1>
                    </button>
                </div>
            </div>
        </PageLayout>
    );
}

export default SelectAdminPage;