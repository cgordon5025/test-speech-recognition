import { useContext, createContext, useState } from "react";

export const SpokenWordContext = createContext()

export const useSpokenWordContext = () => useContext(SpokenWordContext)

export const SpokenWordProvider = ({ children }) => {
    const [spokenWords, setSpokenWords] = useState()

    const updateTranscript = (transcript) => {
        setSpokenWords(transcript)
    }
    return (<SpokenWordContext.Provider value={{ updateTranscript, spokenWords }}>{children}</SpokenWordContext.Provider>)
}