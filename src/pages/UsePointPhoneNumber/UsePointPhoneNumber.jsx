/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { totalPayPriceState } from "../../atoms/totalPayPriceAtom";
import { orderMenuListState } from "../../apis/api/orderMenuListAtom";
import { orderRequest } from "../../apis/api/menuApi";
import { portOnePayRequest } from "../../apis/api/portOneApi";
import { searchUserRequest } from "../../apis/api/searchUser";
import PageModal from "../../components/PageModal/PageModal";

function UsePointPhoneNumber(props) {
    // useAuthCheck();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [usePoint, setUsePoint] = useState(0);
    const [currentPoint, setCurrentPoint] = useState(0);
    const [userList, setUserList] = useState([]);
    const [buttonMode, setButtonMode] = useState(0);
    const [totalAmount, setTotalAmount] = useState();
    const [totalPayPrice, setTotalPayPrice] =
        useRecoilState(totalPayPriceState);
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);

    // ------------ 총 결제 가격 상태 초기화 -----------
    useEffect(() => {
        setTotalAmount(() => totalPayPrice);
    }, []);

    // ------------ 주문 요청 -------------------
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

    // ------------ 결제 요청 ---------------------
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

    // ------------ 회원 조회 쿼리 -----------------
    const searchUserQuery = useQuery(["searchUserQuery"], searchUserRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setUserList(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    // ------------ 전화번호 확인 함수 --------------
    const handlePhoneNumberSubmitClick = () => {
        if (buttonMode === 0) {
            setUsePoint(() => 0);
            setCurrentPoint(() => 0);
            setTotalAmount(() => totalPayPrice);
            let user = {};
            user = userList.filter(
                (user) => user.phoneNumber === inputValue
            )[0];
            if (inputValue.length === 0) {
                Swal.fire({
                    title: "전화번호를 입력해주세요!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
            } else {
                if (user === undefined) {
                    Swal.fire({
                        title: "회원을 찾을 수 없어요!",
                        icon: "question",
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                    });
                    return;
                } else {
                    setCurrentPoint(() => user.totalPoint);
                    setInputValue(() => []);
                }
                setButtonMode(() => 1);
            }
        } else if (buttonMode === 1) {
            if (currentPoint >= parseInt(inputValue)) {
                setUsePoint(() => parseInt(inputValue));
                setButtonMode(() => 0);
                setInputValue(() => []);
            } else if (usePoint === 0) {
                Swal.fire({
                    title: "사용할 포인트를 입력해주세요!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
            } else {
                Swal.fire({
                    title: "사용가능한 포인트가 부족해요!",
                    text: `사용가능한 포인트 : ${currentPoint}점`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                setInputValue(() => []);
            }
        }
    };

    // ------------ 전화번호 입력 함수 ---------------
    const handleNumClick = (num) => {
        if (num === "전액사용") {
            if (totalAmount > currentPoint) {
                setInputValue(() => currentPoint);
                return;
            } else {
                setInputValue(() => totalAmount);
                return;
            }
        } else {
            setInputValue((prev) => prev + num);
        }
    };
    // 사용 포인트가 셋 되었을때 결제금액 변경
    useEffect(() => {
        if (!!usePoint) {
            setTotalAmount(() => totalAmount - usePoint);
        }
    }, [usePoint]);

    const handleDeleteClick = () => {
        setInputValue(() => inputValue.slice(0, -1));
    };

    // ------------- 하단 버튼 함수 ----------------
    const handleCancelClick = () => {
        navigate("/menu/menuall/order");
    };
    const handleUsePointClick = () => {
        if (totalAmount === totalPayPrice) {
            Swal.fire({
                title: "포인트를 사용하지 않고 결제하시겠습니까?",
                icon: "error",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "결제하기",
                cancelButtonText: "취소하기",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    let menuName = orderMenuList.map((order) => order.menuName);
                    let orderName = "";
                    if (menuName.length > 1) {
                        orderName = `${menuName[0]} 외 ${
                            menuName.length - 1
                        }건`;
                    } else {
                        orderName = menuName[0];
                    }
                    portOnePayRequestMutation.mutate({
                        orderName: orderName,
                        totalAmount: totalAmount,
                    });
                }
            });
        } else {
            if (totalAmount === 0) {
                let orderInfo = [];
                orderMenuList.map((order) =>
                    orderInfo.push({
                        menuId: order.menuId,
                        menuCount: order.menuCount,
                    })
                );
                orderRequestMutation.mutate(orderInfo);
                return;
            }
            let menuName = orderMenuList.map((order) => order.menuName);
            let orderName = "";
            if (menuName.length > 1) {
                orderName = `${menuName[0]} 외 ${menuName.length - 1}건`;
            } else {
                orderName = menuName[0];
            }
            portOnePayRequestMutation.mutate({
                orderName: orderName,
                totalAmount: totalAmount,
            });
        }
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 사용</h1>
                </div>
                <div css={s.main}>
                    <div css={s.phoneNumberLayout}>
                        <div css={s.phoneNumberInput}>{inputValue}</div>
                        <table css={s.tableContainer}>
                            <tr>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("1")}
                                    >
                                        1
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("2")}
                                    >
                                        2
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("3")}
                                    >
                                        3
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("4")}
                                    >
                                        4
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("5")}
                                    >
                                        5
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("6")}
                                    >
                                        6
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("7")}
                                    >
                                        7
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("8")}
                                    >
                                        8
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("9")}
                                    >
                                        9
                                    </button>
                                </td>
                            </tr>
                            <tr css={s.trBox}>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() =>
                                            handleNumClick(
                                                buttonMode === 0
                                                    ? "010"
                                                    : "전액사용"
                                            )
                                        }
                                    >
                                        {buttonMode === 0 ? "010" : "전액사용"}
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={() => handleNumClick("0")}
                                    >
                                        0
                                    </button>
                                </td>
                                <td css={s.table}>
                                    <button
                                        css={s.number}
                                        onClick={handleDeleteClick}
                                    >
                                        지움
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div css={s.pointSubmitButtonBox}>
                        <button onClick={handlePhoneNumberSubmitClick}>
                            <FaCircleChevronRight />
                        </button>
                        Click!
                    </div>
                    <div css={s.usePoint}>
                        <h1>현재 포인트 : {currentPoint}pt</h1>
                        <h1>사용할 포인트 : {usePoint}pt</h1>
                        <h1>남은 포인트 : {currentPoint - usePoint}pt</h1>
                        <h1>총 결제 금액 : {totalAmount}원</h1>
                    </div>
                </div>
                <div css={s.buttonLayout}>
                    <div css={s.buttonBox}>
                        <button onClick={handleCancelClick}>취소하기</button>
                        <button onClick={handleUsePointClick}>결제하기</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default UsePointPhoneNumber;