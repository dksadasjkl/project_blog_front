/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { MdOutlineTakeoutDining } from "react-icons/md";
import { MdOutlineTableRestaurant } from "react-icons/md";
import PageLayout from "../../components/PageLayout/PageLayout";

function SelectPackageOrStore(props) {
    const navigate = useNavigate();
    const handleSelectButtonClick = () => {
        navigate("/menu/menuall");
    };

    return (
        <PageLayout>
            <div css={s.layout}>
                <button css={s.selectWay} onClick={handleSelectButtonClick}>
                    <MdOutlineTakeoutDining />
                    <h1>포장</h1>
                </button>
                <button css={s.selectWay} onClick={handleSelectButtonClick}>
                    <MdOutlineTableRestaurant />
                    <h1>매장</h1>
                </button>
            </div>
        </PageLayout>
    );
}

export default SelectPackageOrStore;