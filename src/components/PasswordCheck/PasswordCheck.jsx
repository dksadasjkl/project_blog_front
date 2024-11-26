/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useInput } from "../../hooks/useInput";
import { useMutation } from "react-query";
import { checkPasswordRequest } from "../../apis/api/checkPassword";
import { useRecoilState } from "recoil";
import { checkPasswordState } from "../../atoms/checkPasswordAtom";
import img from "../../assets/coconut . (2).png";
import Swal from "sweetalert2";

function PasswordCheck(props) {
    const [password, handleOnChangePassword] = useInput("password");
    const [checkPassword, setCheckPassword] =
        useRecoilState(checkPasswordState);

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

    const checkPasswordMutation = useMutation({
        mutationKey: "checkPasswordMutation",
        mutationFn: checkPasswordRequest,
        onSuccess: (response) => {
            if (response.data === true) {
                Toast.fire({
                    icon: "success",
                    title: "성공",
                });
                setCheckPassword(() => true);
            }
        },
        onError: (error) => {
            if (error.response.status === 400) {
                Toast.fire({
                    icon: "error",
                    title: "비밀번호를 다시 확인해주세요.",
                });
                return;
            }
        },
    });

    const checkClick = () => {
        checkPasswordMutation.mutate({
            password,
        });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            checkClick();
        }
    };

    return (
            <div css={s.layout}>
                <div css={s.signinBox}>
                    <div css={s.imgBox}>
                        <img src={img} alt="" />
                    </div>
                    <div css={s.inputInfo}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={handleOnChangePassword}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>
                <button css={s.loginButton} onClick={checkClick}>
                    확인
                </button>
            </div>
    );
}

export default PasswordCheck;