import { useEffect } from "react";
import { useQueryClient } from "react-query";

export const useAuthCheck = () => {
    const queryClient = useQueryClient();
    const Swal = require("sweetalert2");

    useEffect(() => {
        const principalData = queryClient.getQueryData("principalQuery");
        console.log(principalData);
        if (!principalData) {
            Swal.fire({
                title: "잘못된 접근입니다!",
                text: "관리자에게 문의해주세요.",
                icon: "error",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
            setTimeout(() => {
                window.location.replace("/");
            }, 2000);
        }
    }, []);
};