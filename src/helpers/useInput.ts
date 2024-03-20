import React, {useCallback, useState} from "react";

const useInput = (callback: (value: string)=>void) => {
    const [value, setValue] = useState<string>('')
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log(e.target.value)
        callback(e.target.value)
    }, []);
    return{
        value,
        onChange
    }
}
export default useInput