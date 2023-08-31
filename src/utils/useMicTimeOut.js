import { useEffect, useRef, useCallback } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import { useSpokenWordContext } from "../Context/SpokenWordContext";
function useMicTimeOut(callback, ms) {
    const { transcript, listening } = useSpeechRecognition()
    const { spokenWords, updateTranscript } = useSpokenWordContext()
    var timeoutId = useRef();
    var memorizedCallback = useCallback(function () {
        clearTimeout(timeoutId.current)
        timeoutId.current = setTimeout(function queueTimeout() {
            callback();
        }, ms);
    }, [callback, ms]);
    // useEffect(() => {
    //     console.log("working???")
    // }, [memorizedCallback])
    useEffect(function () {
        if (listening) {
            if (transcript !== spokenWords) {
                updateTranscript(transcript)
                console.log("rerunning it")
                // memorizedCallback()
            } else {
                console.log("they match now")
                memorizedCallback()
            }
        }
    }, [memorizedCallback])
}

export default useMicTimeOut