/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { salesModeState } from "../../atoms/salesModeAtom";
import { getSalesRequest } from "../../apis/api/salesApi";
import { getMenuRequest } from "../../apis/api/menuApi";
import AdminPageLayout from "../../components/AdminPageLayout/AdminPageLayout";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import AdminSalesChart from "../../components/AdminSalesChart/AdminSalesChart";
import MenuButton from "../../components/MenuButton/MenuButton";
import AdminSaleByMenu from "../../components/AdminSaleByMenu/AdminSaleByMenu";


function AdminSalesPage() {
    // useAuthCheck()
    const [sales, setSales] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [salesMode, setSalesMode] = useRecoilState(salesModeState);
    const [yearOptions, setYearOptions] = useState([]);
    const [year, setYear] = useState();
    const [salesData, setSalesData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setSalesData(() => sales.filter((sales) => sales.year === year.value));
    }, [year]);

    useEffect(() => {
        let maxYear = -Infinity; // 최대값을 저장할 변수를 음수 무한대로 초기화

        sales.forEach((item) => {
            if (item.year > maxYear) {
                maxYear = item.year; // 현재 year 속성이 최대값보다 크면 최대값을 업데이트
            }
        });
        setYear(() => ({
            value: maxYear,
            label: maxYear,
        }));
    }, [sales]);

    const salesQuery = useQuery(["salesQuery"], getSalesRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setSales(() => response.data);
            response.data.map((data) =>
                setYearOptions((prev) => [...prev, data.year])
            );
        },
        onError: (error) => {
            console.log("salesQuery", error);
        },
    });

    const menuQuery = useQuery(["menuQuery"], () => getMenuRequest(1), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setMenuList(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleMenuClick = (id) => {
        navigate(`/admin/sale/menu?menuId=${id}`);
    };

    const handleYearOptionsOnChange = (value) => {
        setYear(() => value);
    };

    console.log(menuList);

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>매출 조회</div>
                </div>
                <div css={s.salesCharts}>
                    <div css={s.toggleSwitch}>
                        <div>
                            <div>총 매출</div>
                            <ToggleSwitch
                                width={50}
                                height={25}
                                onColor={"#ff7300"}
                                offColor={"#8abdf3"}
                                state={"sales"}
                                checked={salesMode}
                            />
                            <div>총 주문 수</div>
                        </div>
                        <Select
                            options={[...new Set(yearOptions)].map((year) => ({
                                label: year,
                                value: year,
                            }))}
                            value={year}
                            onChange={handleYearOptionsOnChange}
                            placeholder="연도"
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border: state.isFocused ? "none" : "none",
                                    // borderBottom: "2px solid #222",
                                    backgroundColor: "transparent",
                                    fontSize: "20px",
                                }),
                            }}
                        />
                    </div>
                    <div css={s.chartBox}>
                        {!salesMode ? (
                            <AdminSalesChart
                                sales={salesData}
                                month={"month"}
                                keyName={"총 매출"}
                                dataKey={"totalSales"}
                                barColor={"#8abdf3"}
                                lineColor={"#ff7300"}
                            />
                        ) : (
                            <AdminSalesChart
                                sales={salesData}
                                month={"month"}
                                keyName={"총 주문 수"}
                                dataKey={"orderCount"}
                                barColor={"#ff7300"}
                                lineColor={"#8abdf3"}
                            />
                        )}
                    </div>
                </div>
                <div css={s.line}></div>
                <div css={s.menuList}>
                    {menuList.map((menu, index) => (
                        <MenuButton
                            key={menu.menuId}
                            onClick={() => handleMenuClick(menu.menuId)}
                            menuName={menu.menuName}
                            price={menu.menuPrice}
                            cal={menu.menuCal}
                            img={menu.menuImgUrl}
                        />
                    ))}
                </div>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route
                        path="/menu/*"
                        element={<AdminSaleByMenu menuList={menuList} />}
                    />
                </Routes>
            </div>
        </AdminPageLayout>
    );
}

export default AdminSalesPage;