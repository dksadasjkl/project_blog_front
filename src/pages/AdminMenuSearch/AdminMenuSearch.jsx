/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getMenuRequest } from "../../apis/api/menuApi";
import AdminPageLayout from "../../components/AdminPageLayout/AdminPageLayout";
import MenuButton from "../../components/MenuButton/MenuButton";
import AdminMenuUpdate from "../AdminMenuUpdate/AdminMenuUpdate";

function AdminMenuSearch() {
    // useAuthCheck()
    const [menuList, setMenuList] = useState([]);
    const [searchMenuList, setSearchMenuList] = useState(menuList);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setSearchMenuList(() =>
            menuList.filter((menu) => menu.menuName.includes(searchInput))
        );
    }, [searchInput, menuList]);

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
        navigate(`/admin/getmenu/menu?menuId=${id}`);
    };

    const handleOnChange = (e) => {
        setSearchInput(() => e.target.value);
    };

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 관리</div>
                </div>
                <div css={s.inputLayout}>
                    <div>
                        <input
                            type="text"
                            onChange={handleOnChange}
                            value={searchInput}
                            placeholder="메뉴 이름을 검색해주세요"
                        />
                    </div>
                </div>
                <div css={s.searchMenuList}>
                    {searchMenuList.map((menu, index) => (
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
                        element={<AdminMenuUpdate menuList={menuList} />}
                    />
                </Routes>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMenuSearch;