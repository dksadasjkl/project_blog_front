/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getPrincipalRequest } from "../../apis/api/principal";
import { checkPasswordState } from "../../atoms/checkPasswordAtom";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import PasswordCheck from "../../components/PasswordCheck/PasswordCheck";

function HomePage() {
    const [imgFile, setImgFile] = useState("");
    const [checkPassword, setCheckPassword] =
        useRecoilState(checkPasswordState);
    const navigate = useNavigate();
    const handlePageClick = () => {
        navigate("/menu/select");
    };

    const handlebackButtonClick = () => {
        navigate("/selectmenu");
        setCheckPassword(() => false);
    };

    const nowImgQuery = useQuery(["nowImgQuery"], () => getPrincipalRequest(1), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setImgFile(response.data);
            console.log(response.data); 
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <>
            {checkPassword ? (
                <>
                    <div css={s.buttonLayout}>
                        <button
                            css={s.backButton}
                            onClick={handlebackButtonClick}
                        >
                            <TbArrowBigLeftFilled />
                        </button>
                    </div>
                    <div css={s.layout} onClick={handlePageClick}>
                        <div css={s.content}>
                            <div css={s.imgBox}>
                                <img src={imgFile.imgUrl} alt="" />
                            </div>
                            <div css={s.text}>
                                <h1>화면을 터치해 주세요!</h1>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <PasswordCheck />
            )}
        </>
    );
}

export default HomePage;