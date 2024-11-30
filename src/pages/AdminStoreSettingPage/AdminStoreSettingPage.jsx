/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2"; 
import { storeFeedbackSettingState } from "../../atoms/storeFeedbackSettingAtom";
import { storePlaySettingState } from "../../atoms/storePlaySettingAtom";
import { useEffect, useState } from "react";
import { editTradeNameRequest } from "../../apis/api/tradeName";
import { storeSettingRequest } from "../../apis/api/storeSettingApi";
import AdminPageLayout from "../../components/AdminPageLayout/AdminPageLayout";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import AdminLogoPage from "../../components/AdminLogoPage/AdminLogoPage";

function AdminStoreSettingPage(props) {
    // useAuthCheck();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const [storeFeedbackSetting, setStoreFeedbackSetting] = useRecoilState(
        storeFeedbackSettingState
    );
    const [storePlaySetting, setStorePlaySetting] = useRecoilState(
        storePlaySettingState
    );
    const [tradeName, setTradeName] = useState("");

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const editTradeNameMutation = useMutation({
        mutationKey: "editTradeNameMutation",
        mutationFn: editTradeNameRequest,
        onSuccess: (response) => {
            Toast.fire({
                icon: "success",
                title: "성공적으로 업로드가 완료되었습니다.",
            });
            setTimeout(() => {
                window.location.reload("/");
            }, 1000);
        },
        onError: (error) => {
            console.log(error);
            alert("변경할 매장 이름 확인이 필요합니다");
        },
    });

    const handleOnClick = () => {
        if (tradeName === "") {
            Swal.fire({
                title: "점포 이름을 입력해주세요!",
                icon: "error",
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
            });
            return;
        } else if (tradeName === principalData.data.tradename) {
            Swal.fire({
                title: "현재 점포 이름과 같아요!",
                icon: "error",
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
            });
            return;
        }
        editTradeNameMutation.mutate({
            tradeName: tradeName,
        });
    };

    const handleOnChange = (e) => {
        setTradeName(() => e.target.value);
    };

    useEffect(() => {
        setStoreFeedbackSetting(() =>
            principalData?.data.feedbackUse === 0 ? false : true
        );
        setStorePlaySetting(() =>
            principalData?.data.playUse === 0 ? false : true
        );
    }, []);

    const storeSettingMutation = useMutation({
        mutationKey: "storeSettingMutation",
        mutationFn: storeSettingRequest,
        onSuccess: (response) => {
            queryClient.invalidateQueries(["principalQuery"]);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    useEffect(() => {
        storeSettingMutation.mutate({
            feedbackUse: storeFeedbackSetting === true ? 1 : 0,
            playUse: storePlaySetting === true ? 1 : 0,
        });
    }, [storeFeedbackSetting, storePlaySetting]);

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>가게 설정</div>
                </div>
                <div css={s.main}>
                    <div css={s.mainLayout}>
                        <div css={s.mainBox}>
                            <div css={s.mainTitle}>피드백 페이지 활성화</div>
                            <div>
                                <ToggleSwitch
                                    width={65}
                                    height={35}
                                    onColor={"#0099ff"}
                                    state={"feedback"}
                                    checked={storeFeedbackSetting}
                                />
                            </div>
                        </div>
                        <div css={s.mainBox}>
                            <div css={s.mainTitle}>
                                관광지 추천 페이지 활성화
                            </div>
                            <div>
                                <ToggleSwitch
                                    width={65}
                                    height={35}
                                    onColor={"#0099ff"}
                                    state={"play"}
                                    checked={storePlaySetting}
                                />
                            </div>
                        </div>
                        <div css={s.nameBox}>
                            <div css={s.mainTitle}>점포 이름 변경하기</div>
                            <div css={s.inputBox}>
                                <input
                                    type="text"
                                    onChange={handleOnChange}
                                    placeholder="점포 이름을 입력하세요."
                                />
                                <button onClick={handleOnClick}>변경</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.logoLayout}>
                    <AdminLogoPage />
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminStoreSettingPage;