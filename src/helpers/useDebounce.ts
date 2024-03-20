import {useCallback} from "react";

const useDebounce = (callback: (...args: any[])=>any) => {
    let timer: NodeJS.Timeout | undefined
    return useCallback((...args: any[]) => {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            callback(...args)
        }, 150)
    }, [callback]);
}
export default useDebounce