/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageLayout/PageLayout";
import * as s from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuth2Page(props) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const name = searchParams.get("name");
    const provider = searchParams.get("provider");

    const handleMergeClick = () => {
        navigate(`/oauth2/merge?name=${name}&provider=${provider}`);
    };

    const handleSignupClick = () => {
        navigate(`/oauth2/signup?name=${name}&provider=${provider}`);
    };

    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.box}>
                        <h1>계정 통합</h1>
                        <p>이미 (상호명 - 예정)의 계정을 가지고 계신가요?</p>
                        <button css={s.oauth2Button} onClick={handleMergeClick}>
                            계정 통합하기
                        </button>
                    </div>
                    <div css={s.box}>
                        <h1>회원가입</h1>
                        <p>새로 가입하고 싶으신가요?</p>
                        <button
                            css={s.oauth2Button}
                            onClick={handleSignupClick}
                        >
                            회원가입하기
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default OAuth2Page;