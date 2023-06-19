import Webcam from 'react-webcam'
import React, { useRef, useCallback, useState } from "react";

const Photo = () => {
    const webcamRef = useRef(null)
    const [image, setImage] = useState()
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        setImage(imageSrc)
    }, [webcamRef])

    const recordVideo = () => {

    }

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'user'
    }
    return (
        <>
            <Webcam audio={false}
                screenshotFormat='image/jpeg'
                height={720}
                ref={webcamRef}
                width={1280}
                videoConstraints={videoConstraints} />

            <button onClick={capture}>Capture Photo</button>
            <button onClick={recordVideo}>Start Recording</button>
            <h1>Hello</h1>
            {image ? (
                <img src={image} alt='screenshot'></img>
            ) : (
                <h1>no image taken</h1>
            )}
        </>
    )

}

export default Photo