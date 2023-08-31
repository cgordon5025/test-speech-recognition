import React, { useState, useEffect } from "react";
import { useSpokenWordContext } from "../../Context/SpokenWordContext";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useMicTimeOut from "../../utils/useMicTimeOut";
const Voicerecognitionstest = () => {
    const { updateTranscript, spokenWords } = useSpokenWordContext()
    // const [spokenWords, setSpokenWords] = useState()
    const [seeButton, setSeeButton] = useState("hidden")
    const [seconds, setSeconds] = useState(0)
    const { transcript, transcribing, listening, resetTranscript,
        isMicrophoneAvailable, browserSupportsSpeechRecognition
    } = useSpeechRecognition()
    useEffect(() => {
        updateTranscript(transcript)
    }, [transcript]) //eslint-disable-line react-hooks/exhaustive-deps
    // useEffect(() => {
    // const _myInterval = setInterval(function () {
    //     if (listening) {
    //         if (spokenWords !== transcript) {
    //             updateTranscript(transcript)
    //             console.log("it has changed")
    //         } else {
    //             console.log("it hasn't changed for some time")
    //         }
    //     }
    // }, 2000)
    //     return () => clearInterval(_myInterval)
    // }, [transcript])
    // var interval = setInterval(function () {
    //     setSeconds(seconds => seconds + 1)
    //     console.log(seconds)
    // }, 1000)
    useMicTimeOut(() => {
        if (spokenWords === transcript && listening) {
            console.log("yay")
            setSeeButton("visible")
        }
    }, 3000)
    const continuous = () => {
        // console.log(listening)
        // console.log("im listening to you")
        SpeechRecognition.startListening({ continuous: true, })
    }
    // console.log(isMicrophoneAvailable)
    if (!browserSupportsSpeechRecognition) {
        return (<p>Ooops browser does not support speech recognition</p>)
    }
    return (
        <>
            <div>
                <p>Microphone {listening ? "on" : "off"} </p>
                <p>Transcribing {transcribing ? "on" : "off"}</p>
                <button onClick={continuous}>Start</button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
                <button style={{ visibility: seeButton }}>It here?</button>
                <h2>Transcript: {transcript}</h2>
                <h2>Spoken Words: {spokenWords}</h2>
            </div>
        </>
    )
}

export default Voicerecognitionstest