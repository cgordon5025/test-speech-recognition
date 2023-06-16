import Webcam from "../webcam";
import React, { useRef, useCallback } from "react";

const Photo = () => {
    const webcamRef = useRef(null)
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
    }, [webcamRef])

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'user'
    }
    return (
        <>
            <Webcam audio={true}
                screenshotFormat='image/png'
                height={720}
                ref={webcamRef}
                width={1280}
                videoConstraints={videoConstraints} />

            <button onClick={capture}>Capture Photo</button>
            <h1>Hello</h1>
        </>
    )
}

export default Photo