/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { salesModeState } from "../../atoms/salesModeAtom";
import { searchSalesByMenuRequest } from "../../apis/api/salesApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import PageModal from "../PageModal/PageModal";
import AdminSalesChart from "../AdminSalesChart/AdminSalesChart";

function AdminSaleByMenu({ menuList }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [salesMode, setSalesMode] = useRecoilState(salesModeState);
    const [salesByMenu, setSalesByMenu] = useState([]);
    const [menuInfo, setMenuInfo] = useState();
    const [selectedMenu, setSelectedMenu] = useState();
    const [yearOptions, setYearOptions] = useState([]);
    const [year, setYear] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setMenuInfo(() => {
            return menuList.filter(
                (menu) => menu.menuId === parseInt(searchParams.get("menuId"))
            )[0];
        }, []);
    }, []);
    console.log(menuInfo);
    useEffect(() => {
        let maxYear = -Infinity; // 최대값을 저장할 변수를 음수 무한대로 초기화

        salesByMenu.forEach((item) => {
            if (parseInt(item.orderYear) > maxYear) {
                maxYear = parseInt(item.orderYear); // 현재 year 속성이 최대값보다 크면 최대값을 업데이트
            }
        });
        setYear(() => ({
            value: maxYear,
            label: maxYear,
        }));
    }, [salesByMenu]);

    const salesByMenuQuery = useQuery(
        ["salesByMenuQuery"],
        searchSalesByMenuRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setSalesByMenu(response.data);
                response.data.map((data) =>
                    setYearOptions((prev) => [
                        ...prev,
                        parseInt(data.orderYear),
                    ])
                );
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    useEffect(() => {
        setSelectedMenu(() =>
            salesByMenu
                .filter((menu) => {
                    return (
                        menu?.menuId === parseInt(searchParams.get("menuId")) &&
                        parseInt(menu.orderYear) === year?.value
                    );
                })
                .map((menu) => {
                    return {
                        menuId: menu.menuId,
                        month: parseInt(menu.orderMonth),
                        year: parseInt(menu.orderYear),
                        totalSales: menu.sales,
                        totalCount: menu.totalCount,
                    };
                })
        );
    }, [year]);

    const handleonClickCancel = () => {
        navigate("/admin/sale");
    };

    const handleYearOptionsOnChange = (value) => {
        setYear(() => value);
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 매출 조회</div>
                </div>
                <div css={s.main}>
                    <div css={s.chartLayout}>
                        <div css={s.toggleSwitchLayout}>
                            <div css={s.toggleSwitch}>
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
                                options={[...new Set(yearOptions)].map(
                                    (year) => ({
                                        label: year,
                                        value: year,
                                    })
                                )}
                                value={year}
                                onChange={handleYearOptionsOnChange}
                                placeholder="연도"
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: state.isFocused
                                            ? "none"
                                            : "none",
                                        // borderBottom: "2px solid #222",
                                        backgroundColor: "transparent",
                                        fontSize: "25px",
                                    }),
                                }}
                            />
                        </div>
                        <div css={s.chartBox}>
                            {!salesMode ? (
                                <AdminSalesChart
                                    sales={selectedMenu}
                                    month={"month"}
                                    keyName={"총 매출"}
                                    dataKey={"totalSales"}
                                    barColor={"#8abdf3"}
                                    lineColor={"#ff7300"}
                                />
                            ) : (
                                <AdminSalesChart
                                    sales={selectedMenu}
                                    month={"month"}
                                    keyName={"총 주문 수"}
                                    dataKey={"totalCount"}
                                    barColor={"#ff7300"}
                                    lineColor={"#8abdf3"}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div css={s.menuInfo}>
                    <div css={s.imgBox}>
                        <img src={menuInfo?.menuImgUrl} alt="menuImg" />
                    </div>
                    <div css={s.infoBox}>
                        <div>{menuInfo?.menuName}</div>
                        <div>{menuInfo?.categoryName}</div>
                        <div>{menuInfo?.menuPrice}원</div>
                        <div>{menuInfo?.menuCal} cal</div>
                    </div>
                </div>
                <div css={s.buttonLayout}>
                    <button css={s.cancel} onClick={handleonClickCancel}>
                        닫기
                    </button>
                </div>
            </div>
        </PageModal>
    );
}

export default AdminSaleByMenu;