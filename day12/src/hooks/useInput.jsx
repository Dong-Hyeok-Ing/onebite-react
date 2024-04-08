import { useState } from "react";

function useInput() {
    const [input, setInput] = useState({
        menu:"",
        address:"",
        request:""
    });
    const onChange = (e) => {
        setInput({
            ...input, [e.target.name]:e.target.value
        })
    }
    return [input, onChange];
}

export default useInput;