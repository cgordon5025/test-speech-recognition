import Webcam from 'react-webcam'
import React, { useRef, useCallback, useState } from "react";

const Photo = () => {
    const webcamRef = useRef(null)
    const mediaRecorderRef = useRef(null)
    const [chunks, setChunks] = useState([])
    const [image, setImage] = useState()
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        setImage(imageSrc)
    }, [webcamRef])

    const recordVideo = useCallback(() => {
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: 'video/webm'
        })
        mediaRecorderRef.current.addEventListener("dataavailable", handleData)
        mediaRecorderRef.current.start()
    }, [webcamRef, mediaRecorderRef])
    const handleData = useCallback(({ data }) => {
        if (data.size > 0) {
            setChunks((prev) => prev.concat(data))
        }
    })
    const stopRecording = useCallback(() => {
        mediaRecorderRef.current.stop()
    }, [mediaRecorderRef, webcamRef])

    const download = () => {
        if (chunks.length) {
            const blob = new Blob(chunks, { type: "video/mp4" });
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            document.body.appendChild(a)
            a.style = "display:none"
            a.href = url
            a.download = "testvideo.mp4"
            a.click()
            window.URL.revokeObjectURL(url)
            setChunks([])
        }
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
            <button onClick={stopRecording}>Stop</button>
            <button onClick={download}>Download</button>
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