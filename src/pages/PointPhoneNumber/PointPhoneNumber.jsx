/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { orderMenuListState } from "../../apis/api/orderMenuListAtom";
import { totalPayPriceState } from "../../atoms/totalPayPriceAtom";
import { searchUserRequest } from "../../apis/api/searchUser";
import { orderRequest } from "../../apis/api/menuApi";
import { portOnePayRequest } from "../../apis/api/portOneApi";
import { savePointRequest, userSignupRequest } from "../../apis/api/pointApi";
import PageModal from "../../components/PageModal/PageModal";

function PointPhoneNumber() {
    // useAuthCheck();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const [inputValue, setInputValue] = useState("");
    const [userList, setUserList] = useState([]);
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const [totalPayPrice, setTotalPayPrice] =
        useRecoilState(totalPayPriceState);
    const navigate = useNavigate();

    console.log(inputValue)

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

    //  ----------- 주문 요청 --------------

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
                savePointMutation.mutate({
                    phoneNumber: inputValue,
                    point: Math.ceil((totalPayPrice * 1) / 100),
                });
            }, 2000);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    //  -------------- 결제 요청 ----------------------
    const portOnePayRequestMutation = useMutation({
        mutationKey: "portOnePayRequestMutation",
        mutationFn: portOnePayRequest,
        onSuccess: (response) => {
            console.log(response);
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

    // --------------- 포인트 저장 요청 ---------------
    const savePointMutation = useMutation({
        mutationKey: "savePointMutation",
        mutationFn: savePointRequest,
        onSuccess: (response) => {
            console.log(response.data);
            if (response.data === 1) {
                Swal.fire({
                    title: "적립 완료!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
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
            }
        },
    });

    // --------------- 회원가입 요청 ----------------
    const userSignupMutation = useMutation({
        mutationKey: "userSignupMutation",
        mutationFn: userSignupRequest,
        onSuccess: (response) => {
            if (response.data === true) {
                Swal.fire({
                    title: "회원가입 완료!",
                    text: "바로 결제도 도와드릴게요!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                setTimeout(() => {
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
                        totalAmount: totalPayPrice,
                    });
                }, 2000);
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleCancelClick = () => {
        navigate("/menu/menuall/order");
    };

    const handleNumClick = (num) => {
        setInputValue((prev) => prev + num);
    };

    const handleDeleteClick = () => {
        setInputValue(() => inputValue.slice(0, -1));
    };

    const handleSavePointClick = () => {
        let user = {};
        user = userList.filter((user) => user.phoneNumber === inputValue)[0];
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
                    title: "가입되어있지 않아요!",
                    text: "회원을 가입하고 적립을 하시겠습니까?",
                    icon: "error",

                    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                    confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
                    cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
                    confirmButtonText: "가입하기", // confirm 버튼 텍스트 지정
                    cancelButtonText: "취소하기", // cancel 버튼 텍스트 지정

                    reverseButtons: true, // 버튼 순서 거꾸로
                }).then((result) => {
                    if (result.isConfirmed) {
                        userSignupMutation.mutate({
                            phoneNumber: inputValue,
                        });
                    }
                });
                return;
            } else {
                let menuName = orderMenuList.map((order) => order.menuName);
                let orderName = "";
                if (menuName.length > 1) {
                    orderName = `${menuName[0]} 외 ${menuName.length - 1}건`;
                } else {
                    orderName = menuName[0];
                }
                portOnePayRequestMutation.mutate({
                    orderName: orderName,
                    totalAmount: totalPayPrice,
                });
            }
        }
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
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
                                    onClick={() => handleNumClick("010")}
                                >
                                    010
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
                <div css={s.buttonLayout}>
                    <div css={s.buttonBox}>
                        <button onClick={handleCancelClick}>취소하기</button>
                        <button onClick={handleSavePointClick}>적립하기</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default PointPhoneNumber;