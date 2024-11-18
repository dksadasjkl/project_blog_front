/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import instance from "../../apis/utils/instance";
import { principalState } from "../../atoms/principalAtom";

function RootHeader() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin, setLogin ] = useState(false);
    const queryClient = useQueryClient();
    // const principalQueryState = queryClient.getQueryState("principalQuery");

    // useEffect(() => {
    //     setLogin(() => principalQueryState.status === "success");
    // }, [principalQueryState.status]);

    const handleOpenClick = (e) => {
        e.stopPropagation();
        setShow(() => true);
    }

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.refetchQueries("principalQuery");
    }

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
            {
                !isLogin 
                ? <Link css={s.account} to={"/auth/signin"}>
                    <FiUser />
                </Link>
                : 
                <div css={s.accountItems}>
                    <button css={s.logout} onClick={handleLogoutClick}>
                        <FiLogOut />
                    </button>
                    <Link css={s.account} to={"/account/mypage"}>
                        <FiUser />
                    </Link>
                </div>
            }
            
        </div>
    );
}

export default RootHeader;