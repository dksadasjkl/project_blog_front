import { useState } from "react";

export const useMenuRegisterInput = () => {
    const [value, setValue] = useState("");

    const handleOnChange = (e) => {
        if (!!e.target) {
            setValue(() => e.target.value);
        } else {
            setValue(() => e);
        }
    };

    return { value, handleOnChange, setValue };
};