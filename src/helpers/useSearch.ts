import {useCallback, useState} from "react";
import useDebounce from "@/helpers/useDebounce";

const useSearch = (callback: (value: string)=>void) => {
    const [value, setValue] = useState<string>('')
    const search = useCallback(() => {
        callback(value)
    }, [value]);
    const onSearch = useDebounce(search)
    return{
        value,
        setValue
    }
}
export default useSearch