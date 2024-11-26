/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

function AuthPageInput({ type, value, placeholder, onChange, message }) {
    return (
        <div css={s.inputBox}>
            <input
                css={s.input}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {!!message && (
                <div css={s.messageBox(message.type)}>
                    <div css={s.inputIcon(message.type)}>
                        {message.type === "error" ? (
                            <MdError />
                        ) : (
                            <FaCheckCircle />
                        )}
                    </div>
                    {message.text}
                </div>
            )}
        </div>
    );
}

export default AuthPageInput;