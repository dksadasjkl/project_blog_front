/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import PageModal from "../../components/PageModal/PageModal";
import { addFeedbackRequest } from "../../apis/api/feedback";

function FeedbackWritePage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const Swal = require("sweetalert2");
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    const [answer3, setAnswer3] = useState();
    const navigate = useNavigate();

    const feedbackMutation = useMutation({
        mutationKey: "feedbackMutation",
        mutationFn: addFeedbackRequest,
        retry: 0,
        onSuccess: (response) => {
            Swal.fire({
                title: "감사합니다~!",
                text: `더욱 성장하는 ${principalData.data.tradeName}가 되겠습니다!`,
                icon: "success",
                confirmButtonColor: "rgb(252, 10, 86)",
                confirmButtonText: "확인",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/menu/feedback/ok");
                }
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleFeedbackSubmitClick = () => {
        if (answer1 && answer2 && answer3 !== undefined) {
            feedbackMutation.mutate({
                answer1: parseInt(answer1),
                answer2: parseInt(answer2),
                answer3: parseInt(answer3),
            });
        } else {
            Swal.fire({
                title: "Oh..No..",
                text: "답을 선택해주세요!",
                icon: "error",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
        }
    };

    const handleAnswer1Change = (e) => {
        console.log(e.target.value);
        setAnswer1(e.target.value);
    };

    const handleAnswer2Change = (e) => {
        console.log(e.target.value);
        setAnswer2(e.target.value);
    };

    const handleAnswer3Change = (e) => {
        console.log(e.target.value);
        setAnswer3(e.target.value);
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <h1>후기 작성하기</h1>
                <div css={s.feedbackLayout}>
                    <div css={s.feedbackBox}>
                        <div css={s.feedbackContents}>
                            <h1>음식의 맛은 어땠나요?</h1>
                            <div css={s.radioButton}>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="watery"
                                    value="1"
                                    onChange={handleAnswer1Change}
                                />
                                <label for="watery">맛없음</label>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="proper1"
                                    value="2"
                                    onChange={handleAnswer1Change}
                                />
                                <label for="proper1">보통</label>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="salty"
                                    value="3"
                                    onChange={handleAnswer1Change}
                                />
                                <label for="salty">맛있음</label>
                            </div>
                        </div>
                        <div css={s.feedbackContents}>
                            <h1>음식의 양이 적당했나요?</h1>
                            <div css={s.radioButton}>
                                <input
                                    type="radio"
                                    name="amount"
                                    id="little"
                                    value="1"
                                    onChange={handleAnswer2Change}
                                />
                                <label for="little">적음</label>
                                <input
                                    type="radio"
                                    name="amount"
                                    id="proper2"
                                    value="2"
                                    onChange={handleAnswer2Change}
                                />
                                <label for="proper2">적당함</label>
                                <input
                                    type="radio"
                                    name="amount"
                                    id="many"
                                    value="3"
                                    onChange={handleAnswer2Change}
                                />
                                <label for="many">많음</label>
                            </div>
                        </div>
                        <div css={s.feedbackContents}>
                            <h1>직원들이 친절했나요?</h1>
                            <div css={s.radioButton}>
                                <input
                                    type="radio"
                                    name="kind"
                                    id="unkind"
                                    value="1"
                                    onChange={handleAnswer3Change}
                                />
                                <label for="unkind">불친절함</label>
                                <input
                                    type="radio"
                                    name="kind"
                                    id="proper3"
                                    value="2"
                                    onChange={handleAnswer3Change}
                                />
                                <label for="proper3">보통</label>
                                <input
                                    type="radio"
                                    name="kind"
                                    id="kind"
                                    value="3"
                                    onChange={handleAnswer3Change}
                                />
                                <label for="kind">친절함</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button css={s.checkButton} onClick={handleFeedbackSubmitClick}>
                    확인
                </button>
            </div>
        </PageModal>
    );
}

export default FeedbackWritePage;