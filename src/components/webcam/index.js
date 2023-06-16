import { useRecordWebcam } from "react-record-webcam";

const Webcam = () => {
    const OPTIONS = {
        aspectRatio: 1.7,
        disableLogs: true,
        fileName: "test-filename",
        height: 720,
        mimeType: 'video/mp4',
        width: 1280,
    }
    const recordWebcam = useRecordWebcam(OPTIONS)
    const takePic = () => {
        console.log("starting")
        const image = recordWebcam.snap()
        console.log(image)
    }
    return (
        <div>
            {/* this renders an open/close/start/stop and download button look into ways to get a save to server/autosave to server */}
            {/* <RecordWebcam/> */}
            <h5>Camera status: {recordWebcam.status}</h5>
            {/* <button onClick={recordWebcam.open}>Open camera</button>
            <button onClick={recordWebcam.start}>Start recording</button>
            <button onClick={recordWebcam.stop}>Stop recording</button>
            <button onClick={recordWebcam.retake}>Retake recording</button>
            <button onClick={recordWebcam.download}>Download recording</button>
            {/* <button onClick={saveFile}>Save file to server</button> */}
            {/* <button onClick={takePic}>Snap a pic</button>
            <video ref={recordWebcam.webcamRef} autoPlay muted />
            <video ref={recordWebcam.previewRef} autoPlay muted loop />  */}
        </div>
    )
}

export default Webcam