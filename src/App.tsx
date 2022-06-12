import React, { useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style/global-style";
import LayoutContainer from "./components/LayoutContainer";
import { theme } from "./style/theme";
import RecordButton from "./components/RecordButton";
import AudioPlayer from "./components/AudioPlayer";
import Message from "./components/Message";

const StyledRoot = styled.div`
    min-height: 100vh;
    background-color: ${theme.color.black};
`;

export type RecordingState = "waiting" | "recording" | "finished";

function App() {
    const [recordingState, setRecordingState] = useState<RecordingState>("waiting");
    const [recorder, setRecorder] = useState<MediaRecorder>();
    const [recordedAudio, setRecordedAudio] = useState<string>();
    const audioChunksRef = useRef<Blob[]>([]);

    function firstRecording() {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.addEventListener("dataavailable", (event) => {
                audioChunksRef.current.push(event.data);
            });
            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunksRef.current);
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudio(audioUrl);
                audioChunksRef.current = [];
            });
            setRecorder(mediaRecorder);
            mediaRecorder.start();
        });
    }

    function handleStart() {
        if (recorder) {
            audioChunksRef.current = [];
            recorder.start();
        }

        firstRecording();
    }

    function handleStop() {
        if (!recorder) {
            return;
        }
        recorder.stop();
    }

    function handleButtonClick() {
        switch (recordingState) {
            case "waiting":
            case "finished":
                handleStart();
                setRecordingState("recording");
                break;
            case "recording":
                handleStop();
                setRecordingState("finished");
                break;
            default:
                throw new Error(`Unknown recording State ${recordingState}`);
        }
    }

    return (
        <>
            <GlobalStyle />
            <StyledRoot>
                <LayoutContainer>
                    <h1>Hi there :)</h1>
                    <p>Click the button to record your voice. </p>
                    <RecordButton onClick={handleButtonClick} isRecording={recordingState === "recording"} />

                    <AudioPlayer audioSrc={recordedAudio} />
                </LayoutContainer>
            </StyledRoot>
        </>
    );
}

export default App;
