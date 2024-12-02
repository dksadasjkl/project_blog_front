/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checkPasswordState } from "../../atoms/checkPasswordAtom";
import { getSalesRequest } from "../../apis/api/salesApi";
import { getMenuRequest } from "../../apis/api/menuApi";
import AdminPageLayout from "../../components/AdminPageLayout/AdminPageLayout";
import AdminSalesChart from "../../components/AdminSalesChart/AdminSalesChart";
import AdminMainPageTop3 from "../../components/AdminMainPageTop3/AdminMainPageTop3";
import AdminMainPageFeedback from "../../components/AdminMainPageFeedback/AdminMainPageFeedback";
import PasswordCheck from "../../components/PasswordCheck/PasswordCheck";



function AdminMainPage() {
    // useAuthCheck();
    const [ranking, setRanking] = useState([]);
    const [sales, setSales] = useState([]);
    const [salesData, setSalesData] = useState([]);
    const navigate = useNavigate();
    const [checkPassword, setCheckPassword] =
        useRecoilState(checkPasswordState);

    useEffect(() => {
        let maxYear = -Infinity; // 최대값을 저장할 변수를 음수 무한대로 초기화

        sales.forEach((item) => {
            if (item.year > maxYear) {
                maxYear = item.year; // 현재 year 속성이 최대값보다 크면 최대값을 업데이트
            }
        });
        setSalesData(() => sales.filter((sales) => sales.year === 2024));
    }, [sales]);

    const salesQuery = useQuery(["salesQuery"], getSalesRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setSales(() => response.data);
        },
        onError: (error) => {
            console.log("salesQuery", error);
        },
    });

    const rankingQuery = useQuery(["rankingQuery"], () => getMenuRequest(2), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            const filteredData = response.data.filter(item => item !== null);
            // setRanking(() => response.data);
            setRanking(filteredData);
        },
        onError: (error) => {
            console.log("rankingQuery", error);
        },
    });

    const handlebackButtonClick = () => {
        navigate("/admin/select/menu");
        setCheckPassword(() => false);
    };

    return (
        <>
            {checkPassword ? (
                <AdminPageLayout>
                    <div css={s.layout}>
                        <div css={s.buttonLayout}>
                            <button
                                css={s.backButton}
                                onClick={handlebackButtonClick}
                            >
                                <TbArrowBigLeftFilled />
                            </button>
                        </div>
                        <div css={s.boxLayout}>
                            <div css={s.fontLayout}>
                                <h1>Sales</h1>
                                <h1>매출</h1>
                            </div>
                            <div css={s.boxContainer}>
                                <div css={s.categoryBox}>
                                    <AdminSalesChart
                                        sales={salesData}
                                        month={"month"}
                                        keyName={"총 매출"}
                                        dataKey={"totalSales"}
                                        barColor={"#8abdf3"}
                                        lineColor={"#ff7300"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div css={s.boxLayout}>
                            <div css={s.fontLayout}>
                                <h1>TOP3</h1>
                                <h1>랭킹</h1>
                            </div>
                            <div css={s.boxContainer}>
                                <div css={s.categoryBox}>
                                    {ranking.map((menu, index) => (
                                        <AdminMainPageTop3
                                            key={menu?.menuId}
                                            img={menu.menu?.menuImgUrl}
                                            menuName={menu.menu?.menuName}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div css={s.fontLayout}>
                                <h1>Feedback</h1>
                                <h1>피드백</h1>
                            </div>
                            <div css={s.boxContainer}>
                                <div css={s.categoryBox}>
                                    <AdminMainPageFeedback />
                                </div>
                            </div>
                        </div>
                    </div>
                </AdminPageLayout>
            ) : (
                <PasswordCheck />
            )}
        </>
    );
}

export default AdminMainPage;