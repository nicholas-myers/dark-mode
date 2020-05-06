import React, { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {
    const [darkmode, setDarkmode] = useLocalStorage(key, initialValue)
    const body = document.querySelector("body")
    useEffect(()=> {
        if(initialValue === true) {
            body.classList.add("dark-mode")
        } else if (initialValue === false) {
            body.classList.remove("dark-mode")
        }
    }, [initialValue])
    return [darkmode]
}