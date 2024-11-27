/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";
import { getMenuRequest } from "../../apis/api/menuApi";
import { orderListState } from "../../atoms/orderListAtom";
import { orderMenuListState } from "../../apis/api/orderMenuListAtom";


function OrderListComponent(props) {
    const [orderList, setOrderList] = useRecoilState(orderListState);
    const [menuList, setMenuList] = useState([]);
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const ref = useRef();

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, [orderMenuList]);

    const menuListQuery = useQuery(["menuQuery"], () => getMenuRequest(1), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setMenuList(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleMenuCountPlus = (id) => {
        setOrderList((prevOrderList) => {
            return prevOrderList.map((order) => {
                if (order.menuId === id) {
                    return {
                        ...order,
                        menuCount: order.menuCount + 1,
                    };
                }
                return order;
            });
        });
    };

    const handleMenuCountMinus = (id) => {
        const findOrder = orderList.filter((order) => order.menuId === id)[0];

        if (findOrder.menuCount > 1) {
            setOrderList((prevOrderList) =>
                prevOrderList.map((order) => {
                    if (order.menuId === id) {
                        return {
                            ...order,
                            menuCount: order.menuCount - 1,
                        };
                    }
                    return order;
                })
            );
        } else {
            setOrderList((prevOrderList) =>
                prevOrderList.filter((order) => order !== findOrder)
            );
        }
    };

    const handleMenuRemoveClick = (id) => {
        const findOrder = orderList.filter((order) => order.menuId === id)[0];
        setOrderList((prevOrderList) =>
            prevOrderList.filter((order) => order !== findOrder)
        );
    };

    useEffect(() => {
        if (menuList.length > 0) {
            const menus = menuList.filter((menu) => {
                return (
                    orderList.filter((order) => menu.menuId === order.menuId)[0]
                        ?.menuId === menu.menuId
                );
            });
            setOrderMenuList(
                orderList.map((order) => {
                    return {
                        ...order,
                        menuName: menus.filter(
                            (menu) => menu.menuId === order?.menuId
                        )[0]?.menuName,
                        totalPrice:
                            menus.filter(
                                (menu) => menu.menuId === order?.menuId
                            )[0]?.menuPrice * order?.menuCount,
                    };
                })
            );
        }
    }, [orderList, menuList]);

    return (
        <div css={s.layout}>
            <div css={s.orderLayout}>
                <div css={s.orderBox}>
                    {orderMenuList.map((menu) => {
                        return (
                            <div css={s.orderMenuLayout} key={menu.menuId}>
                                <div css={s.orderInfoBox}>
                                    <h1>{menu.menuName}</h1>
                                    <h1>{menu.totalPrice}원</h1>
                                </div>
                                <div css={s.orderCountBox}>
                                    <div css={s.orderCount}>
                                        <button
                                            onClick={() =>
                                                handleMenuCountPlus(menu.menuId)
                                            }
                                        >
                                            <GoPlus />
                                        </button>
                                        <div>{menu.menuCount}</div>
                                        <button
                                            onClick={() =>
                                                handleMenuCountMinus(
                                                    menu.menuId
                                                )
                                            }
                                        >
                                            <FiMinus />
                                        </button>
                                    </div>
                                    <button
                                        css={s.removeButton}
                                        onClick={() =>
                                            handleMenuRemoveClick(menu.menuId)
                                        }
                                    >
                                        <IoClose />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <div ref={ref}></div>
                </div>
            </div>
        </div>
    );
}

export default OrderListComponent;