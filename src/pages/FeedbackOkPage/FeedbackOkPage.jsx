/** @jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../components/PageLayout/PageLayout";
import { useQueryClient } from "react-query";

function FeedbackOkPage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const handleOkClick = () => {
        if (principalData.data.playUse === 0) {
            window.location.replace("/menu/main");
            return;
        } else if (principalData.data.playUse === 1) {
            window.location.replace("/menu/play");
            return;
        }
    };
    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.box}>
                    <div css={s.thankyouComment}>
                        <h1>후기를 남겨 주셔서 감사합니다!</h1>
                    </div>
                </div>
                <button css={s.checkButton} onClick={handleOkClick}>
                    확인
                </button>
            </div>
        </PageLayout>
    );
}

export default FeedbackOkPage;