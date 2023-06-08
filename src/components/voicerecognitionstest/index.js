import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const Voicerecognitionstest = () => {
    const [spokenWords, setSpokenWords] = useState()
    const { transcript, transcribing, listening, resetTranscript,
        isMicrophoneAvailable, browserSupportsSpeechRecognition
    } = useSpeechRecognition()
    useEffect(() => {
        setSpokenWords(transcript)
    }, [transcript])
    const continuous = () => {
        console.log(listening)
        console.log("im listening to you")
        SpeechRecognition.startListening({ continuous: true })
    }
    console.log(isMicrophoneAvailable)
    if (!browserSupportsSpeechRecognition) {
        return (<p>Ooops browser does not support speech recognition</p>)
    }
    console.log(spokenWords)
    return (
        <>
            <div>
                <p>Microphone {listening ? "on" : "off"} </p>
                <p>Transcribing {transcribing ? "on" : "off"}</p>
                <button onClick={continuous}>Start</button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
                <h2>{transcript}</h2>
            </div>
        </>
    )
}

export default Voicerecognitionstest