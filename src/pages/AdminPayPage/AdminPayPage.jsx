/** @jsxImportSource @emotion/react */ // aside css
import { useState } from "react";
import AdminPageLayout from "../../components/AdminPageLayout/AdminPageLayout";
import * as s from "./style";
import { FaCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import { getPaymentsRequest, paymentsCancelRequest } from "../../apis/api/salesApi";

function AdminPayPage(props) {
    // useAuthCheck()
    const [payData, setPayData] = useState({});

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    console.log("API Key:", process.env.REACT_APP_PORTONE_API_SECRET_KEY);
    console.log("Store ID:", process.env.REACT_APP_STORE_ID);

    const paymentsQuery = useQuery(
        ["paymentsQuery"],
        () => getPaymentsRequest,
        {
            retry: 5,
            refetchOnWindowFocus: false,
            onSuccess: async (response) => {
                setPayData(await response);
            },
            onError: (error) => {
                paymentsQuery.refetch();
            },
        }
    );

    const paymentsCancelMutation = useMutation({
        mutationKey: "paymentsCancelMutation",
        mutationFn: paymentsCancelRequest,
        onSuccess: (response) => {
            console.log(response.data);
            Toast.fire({
                icon: "success",
                title: "결제가 취소되었습니다.",
            });
            setTimeout(() => {
                window.location.replace("/admin/pay");
            }, 2000);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const dateFormat = (date) => {
        let month = date?.getMonth() + 1;
        let day = date?.getDate();
        let hour = date?.getHours();
        let minute = date?.getMinutes();
        let second = date?.getSeconds();

        month = month >= 10 ? month : "0" + month;
        day = day >= 10 ? day : "0" + day;
        hour = hour >= 10 ? hour : "0" + hour;
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;

        return (
            date?.getFullYear() +
            "-" +
            month +
            "-" +
            day +
            " " +
            hour +
            ":" +
            minute +
            ":" +
            second
        );
    };

    const handleCancelClick = (id) => {
        console.log(id);
        Swal.fire({
            title: "결제를 취소하시겠습니까?",
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "결제취소",
            cancelButtonText: "닫기",
            reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
            if (result.isConfirmed) {
                paymentsCancelMutation.mutate(id);
            }
            return;
        });
    };

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>결제 내역 조회</div>
                </div>
                <div css={s.searchBoxLayout}>
                    <div css={s.searchBox}>
                        <div css={s.top}>
                            <FaCircle css={s.circle} />
                            <FaCircle css={s.circle} />
                            <FaCircle css={s.circle} />
                        </div>
                        <div css={s.searchLayout}>
                            <div css={s.search}>
                                <ul css={s.askTitle}>
                                    <li>결제상태</li>
                                    <li>주문명</li>
                                    <li>결제대행사</li>
                                    <li>결제금액</li>
                                    <li>상태 승인 시각</li>
                                </ul>
                                <div css={s.listLayout}>
                                    {payData?.data?.items.map((data) => (
                                        <ul key={data.id} css={s.listContainer}>
                                            <li
                                                style={{
                                                    color:
                                                        data.status === "FAILED"
                                                            ? "red"
                                                            : data.status ===
                                                              "PAID"
                                                            ? "green"
                                                            : data.status ===
                                                              "READY"
                                                            ? "skyblue"
                                                            : "gray",
                                                }}
                                            >
                                                {data.status === "FAILED"
                                                    ? "결제실패"
                                                    : data.status === "PAID"
                                                    ? "결제성공"
                                                    : data.status === "READY"
                                                    ? "결제예정"
                                                    : "결제취소"}
                                            </li>
                                            <li>{data.orderName}</li>
                                            <li>{data?.channel?.name}</li>
                                            <li>{data.amount.total}원</li>
                                            <li>
                                                {dateFormat(
                                                    new Date(
                                                        new Date(
                                                            data?.updatedAt
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                timeZone:
                                                                    "Asia/Seoul",
                                                            }
                                                        )
                                                    )
                                                )}
                                            </li>
                                            <li>
                                                {data.status === "PAID" ? (
                                                    <button
                                                        onClick={() =>
                                                            handleCancelClick(
                                                                data.id
                                                            )
                                                        }
                                                    >
                                                        <FaWindowClose />
                                                    </button>
                                                ) : (
                                                    <></>
                                                )}
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminPayPage;