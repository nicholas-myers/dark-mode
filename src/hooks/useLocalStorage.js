import { useState } from "react";
//key will be a string
//value can be anything, object, array, string, number, boolean, etc
export const useLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {
        const localPair = window.localStorage.getItem(key);
        return localPair ? JSON.parse(localPair) : initialValue;
    }); //state

    const setValue = (value) => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    } //setter function

    return [storedValue, setValue]
};
