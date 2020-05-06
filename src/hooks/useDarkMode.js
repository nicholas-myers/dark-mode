import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue)
    const body = document.querySelector("body")
    useEffect(()=> {
        if(value === true) {
            body.classList.add("dark-mode")
        } else if (value === false) {
            body.classList.remove("dark-mode")
        }
    }, [value, body.classList])
    return [value, setValue]
}