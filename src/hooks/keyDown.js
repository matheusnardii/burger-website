import { useEffect, useRef } from "react";

export const keyDown = (keyId, callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const keyClose = (event) => {
            if(event.key === keyId){
                if(callback) callback(ref.current);
            }
        }
        
            window.addEventListener("keydown", keyClose)

        return () => {
            window.removeEventListener("keydown", keyClose)
        }
    }, []);

    return ref;
}