import React, { useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style/global-style";
import LayoutContainer from "./components/LayoutContainer";
import { theme } from "./style/theme";
import RecordButton from "./components/RecordButton";

const StyledRoot = styled.div`
    min-height: 100vh;
    background-color: ${theme.color.black};
`;

function App() {
    const [recordingState, setRecordingState] = useState<"waiting" | "recording" | "finished">("waiting");

    function handleStart() {}

    function handleStop() {}

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

    console.log(recordingState);

    return (
        <>
            <GlobalStyle />
            <StyledRoot>
                <LayoutContainer>
                    <h1>Hi there :)</h1>
                    <p>Click the button to record your voice. </p>

                    <RecordButton onClick={handleButtonClick} isRecording={recordingState === "recording"} />
                </LayoutContainer>
            </StyledRoot>
        </>
    );
}

export default App;
