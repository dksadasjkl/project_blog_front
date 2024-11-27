/**@jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { categoryState } from "../../atoms/categoryAtom";
import { orderListState } from "../../atoms/orderListAtom";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import Top3Button from "../Top3Button/Top3Button";
import { getMenuRequest } from "../../apis/api/menuApi";
import BigMenuListButton from "../BigMenuListButton/BigMenuListButton";


function BigMenuListComponent() {
    const [menuList, setMenuList] = useState([]);
    const [category, setCategory] = useRecoilState(categoryState);
    const [orderList, setOrderList] = useRecoilState(orderListState);

    const menuListQuery = useQuery(
        ["menuQuery", category],
        () => getMenuRequest(category),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMenuList(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const handleMenuClick = (id) => {
        if (orderList.filter((order) => order.menuId === id).length > 0) {
            setOrderList(
                orderList.map((order) => {
                    if (order.menuId === id) {
                        return {
                            ...order,
                            menuCount: order.menuCount + 1,
                        };
                    } else {
                        return order;
                    }
                })
            );
        } else {
            setOrderList([
                ...orderList,
                {
                    menuId: id,
                    menuCount: 1,
                },
            ]);
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.chooseFont}>메뉴</h1>
                <h1 css={s.orderFont}> 선택</h1>
            </div>
            <div css={s.menuListLayout}>
                <div css={s.menuListBox}>
                    {category === 2 ? (
                        menuList.map((menu, index) => (
                            <Top3Button
                                key={menu.menuId}
                                img={menu.menu?.menuImgUrl}
                                menuName={menu?.menu?.menuName}
                                price={menu?.menu?.menuPrice}
                                cal={menu?.menu?.menuCal}
                                index={index}
                                onClick={() => handleMenuClick(menu.menuId)}
                            />
                        ))
                    ) : (
                        <>
                            {menuList.map((menu) => (
                                <BigMenuListButton
                                    key={menu.menuId}
                                    img={menu.menuImgUrl}
                                    menuName={menu.menuName}
                                    price={menu.menuPrice}
                                    cal={menu.menuCal}
                                    onClick={() => handleMenuClick(menu.menuId)}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BigMenuListComponent;