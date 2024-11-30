/**@jsxImportSource @emotion/react */
import * as s from "./style";
import Swal from "sweetalert2";
import { useMutation } from "react-query";
import { useEditPassword } from "../../hooks/useEditPassword";
import AdminPageLayout from "../../components/AdminPageLayout/AdminPageLayout";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { IoIosLock } from "react-icons/io";
import { editPasswordRequest } from "../../apis/api/editPassword";

function PasswordEditPage() {
    // useAuthCheck();
    const [oldPassword, handleOldPassword, oldMessage, setOld, setOldMessage] =
        useEditPassword("oldPassword");
    const [newPassword, handleNewPassword, newMessage, setNew, setNewMessage] =
        useEditPassword("newPassword");
    const [
        newPasswordCheck,
        handleNewPasswordCheck,
        newCheckMessage,
        setNewCheck,
        setNewCheckMessage,
    ] = useEditPassword("newPasswordCheck");

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

    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: editPasswordRequest,
        onSuccess: (response) => {
            Toast.fire({
                icon: "success",
                title: "비밀번호 변경이 완료되었습니다!",
            });
            setTimeout(() => {
                localStorage.removeItem("AccessToken");
                window.location.replace("/");
            }, 2000);
        },
        onError: (error) => {
            if (error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                setOldMessage(null);
                setNewMessage(null);
                setNewCheckMessage(null);
                for (let [k, v] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v,
                    };
                    Toast.fire({
                        icon: "error",
                        title: "비밀번호 인증에 실패하셨습니다. 다시 입력해주세요",
                    });
                    if (k === "oldPassword") {
                        setOldMessage(() => message);
                    }
                    if (k === "newPassword") {
                        setNewMessage(() => message);
                    }
                    if (k === "newPasswordCheck") {
                        setNewCheckMessage(() => message);
                    }
                }
            }
        },
    });

    const handleEditsubmitClick = () => {
        editPasswordMutation.mutate({
            oldPassword,
            newPassword,
            newPasswordCheck,
        });
    };

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>비밀번호 변경하기</div>
                </div>
                <div css={s.contatiner}>
                    <h1 css={s.ciLock}>
                        <IoIosLock />
                    </h1>
                    <div css={s.inputLayout}>
                        <AuthPageInput
                            type={"password"}
                            value={oldPassword}
                            onChange={handleOldPassword}
                            placeholder={"현재 비밀번호를 입력하세요."}
                        />
                        <AuthPageInput
                            type={"password"}
                            value={newPassword}
                            onChange={handleNewPassword}
                            placeholder={"새로운 비밀번호를 입력하세요."}
                        />
                        <AuthPageInput
                            type={"password"}
                            value={newPasswordCheck}
                            onChange={handleNewPasswordCheck}
                            placeholder={"새로운 비밀번호를 확인하세요."}
                        />
                    </div>
                    <div css={s.buttonLayout}>
                        <button css={s.button} onClick={handleEditsubmitClick}>
                            변경하기
                        </button>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default PasswordEditPage;