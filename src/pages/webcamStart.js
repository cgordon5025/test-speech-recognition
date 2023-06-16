import React from "react";
import { useWebcamContext } from "../Context/WebcamContext";
import { useEffect } from "react";
const WebcamStart = () => {
    const { getCameraAccess } = useWebcamContext()
    useEffect(() => {
        getCameraAccess()
    }, [])
    return (<div>Hello</div>)
}

export default WebcamStart