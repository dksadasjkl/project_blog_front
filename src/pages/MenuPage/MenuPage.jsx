/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

function MenuPage(props) {
    // const Swal = require("sweetalert2");
    // const [bigMode, setBigMode] = useState(false);
    // const [orderMenuList, setOrderMenuList] =
    //     useRecoilState(orderMenuListState);
    // const [totalPayPrice, setTotalPayPrice] =
    //     useRecoilState(totalPayPriceState);
    // const navigate = useNavigate();
    // const handleOrderButtonClick = () => {
    //     if (orderMenuList.length > 0) {
    //         navigate("/menu/menuall/order");
    //     } else {
    //         Swal.fire({
    //             title: "아차차...!",
    //             text: "주문내역이 없어요!",
    //             icon: "error",
    //             showConfirmButton: false,
    //             timer: 2000,
    //             timerProgressBar: true,
    //         });
    //     }
    // };

    // const handleBigModeClick = () => {
    //     setBigMode(() => !bigMode);
    // };

    // useEffect(() => {
    //     const order = orderMenuList;
    //     setTotalPayPrice(() => {
    //         let price = 0;
    //         order.map((menu) => (price += menu.totalPrice));
    //         return price;
    //     });
    // }, [orderMenuList]);
    // return (
    //     <PageLayout>
    //     <div css={s.layout}>
    //             <div css={s.container}>
    //                 <div css={s.categoryLayout}>
    //                     <div css={s.categoryBox}>
    //                         {bigMode ? (
    //                             <BigMenuComponent />
    //                         ) : (
    //                             <MenuCategoryPage />
    //                         )}
    //                     </div>
    //                     <button css={s.bigButton} onClick={handleBigModeClick}>
    //                         {bigMode ? "표준 모드" : "큰글씨 모드"}
    //                     </button>
    //                 </div>
    //                 <div css={s.menuLayout}>
    //                     {bigMode ? <BigMenuListComponent /> : <MenuList />}
    //                 </div>
    //             </div>
    //             <div css={s.orderLayout}>
    //                 <div css={s.header}>
    //                     <h1>Order</h1>
    //                     <h1>Menu</h1>
    //                 </div>
    //                 <div css={s.orderMenuLayout}>
    //                     <OrderListComponent />
    //                 </div>
    //                 <div css={s.orderButtonLayout}>
    //                     <button
    //                         css={s.orderButton}
    //                         onClick={handleOrderButtonClick}
    //                     >
    //                         주문하기
    //                         <p>
    //                             {totalPayPrice === 0
    //                                 ? ""
    //                                 : totalPayPrice + "원"}
    //                         </p>
    //                     </button>
    //                 </div>
    //             </div>
    //             <Routes>
    //                 <Route path="/" element={<></>} />
    //                 <Route path="/order/*" element={<PaymentMethod />} />
    //             </Routes>
    //         </div>
    //     </PageLayout>
    // );
}

export default MenuPage;