import { useEffect, useState } from "react";

export const useInput = () => {
    const [value, setValue] = useState("");
    const [ message, setMessage ] = useState(null);

    useEffect(() => {
        if(!value) {
            setMessage(() => null);
            return;
        }   
    }, [ value ])

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    };

    return [value, handleOnChange, setValue, message, setMessage];
};