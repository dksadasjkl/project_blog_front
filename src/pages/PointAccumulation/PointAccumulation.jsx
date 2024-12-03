/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { orderMenuListState } from "../../apis/api/orderMenuListAtom";
import { useRecoilState } from "recoil";
import PageModal from "../../components/PageModal/PageModal";
import { orderRequest } from "../../apis/api/menuApi";
import { portOnePayRequest } from "../../apis/api/portOneApi";
import { totalPayPriceState } from "../../atoms/totalPayPriceAtom";
function PointAccumulation() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const Swal = require("sweetalert2");
    const navigate = useNavigate();
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const [totalPrice, setTotalPrice] = useRecoilState(totalPayPriceState);

    const orderRequestMutation = useMutation({
        mutationKey: "orderRequestMutation",
        mutationFn: orderRequest,
        onSuccess: (response) => {
            Swal.fire({
                title: "주문 완료!",
                text: "음식이 나올때까지 조금만 기다려주세요!",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
            setTimeout(() => {
                if (principalData.data.feedbackUse === 0) {
                    if (principalData.data.playUse === 0) {
                        window.location.replace("/menu/main");
                        return;
                    } else if (principalData.data.playUse === 1) {
                        window.location.replace("/menu/play");
                        return;
                    }
                } else if (principalData.data.feedbackUse === 1) {
                    window.location.replace("/menu/feedbackChoice");
                }
            }, 2000);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const portOnePayRequestMutation = useMutation({
        mutationKey: "portOnePayRequestMutation",
        mutationFn: portOnePayRequest,
        onSuccess: (response) => {
            if (response.code != null) {
                Swal.fire({
                    title: "결제가 취소되었습니다.",
                    text: "다시 시도해 주세요.",
                    icon: "error",
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                return;
            }
            let orderInfo = [];
            orderMenuList.map((order) =>
                orderInfo.push({
                    menuId: order.menuId,
                    menuCount: order.menuCount,
                })
            );

            orderRequestMutation.mutate(orderInfo);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleSaveClick = () => {
        navigate("/menu/menuall/order/pointinput");
    };

    const handleUseClick = () => {
        navigate("/menu/menuall/order/usepointinput");
    };
    console.log(orderMenuList);

    const handleSkipClick = () => {
        let menuName = orderMenuList.map((order) => order.menuName);
        let orderName = "";
        if (menuName.length > 1) {
            orderName = `${menuName[0]} 외 ${menuName.length - 1}건`;
        } else {
            orderName = menuName[0];
        }
        Swal.fire({
            title: "주문하시겠습니까?",
            text: "적립하지 않은 포인트는 되돌릴 수 없습니다.",
            icon: "warning",
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
            cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
            confirmButtonText: "주문하기", // confirm 버튼 텍스트 지정
            cancelButtonText: "취소", // cancel 버튼 텍스트 지정
            reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) {
                // 만약 모달창에서 confirm 버튼을 눌렀다면
                portOnePayRequestMutation.mutate({
                    orderName: orderName,
                    totalAmount: totalPrice,
                });
            }
        });
    };
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립 / 사용</h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox} onClick={handleSaveClick}>
                            <h1>적립하기</h1>
                        </div>
                    </div>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox} onClick={handleUseClick}>
                            <h1>사용하기</h1>
                        </div>
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSkipClick}>적립안함</button>
                </div>
            </div>
        </PageModal>
    );
}

export default PointAccumulation;