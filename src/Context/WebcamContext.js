import { useContext, createContext, useState, useEffect } from "react";

export const WebcamContext = createContext()

export const useWebcamContext = () => useContext(WebcamContext)

export const WebcamProvider = ({ children }) => {
    const [camera, setCamera] = useState()

    const getCameraAccess = async () => {
        console.log("trying to get access")
        const devices = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        if (!devices) {
            console.log("there is an error with getting access to the camera")
        }
        console.log(devices)
    }

    return (<WebcamContext.Provider value={{ camera, getCameraAccess }}>{children}</WebcamContext.Provider>)
}

