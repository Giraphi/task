import React from "react";
import { RecordingState } from "../App";
import { theme } from "../style/theme";
import styled from "styled-components";

const StyledRoot = styled.p`
    margin: ${theme.space.md} 0;
`;

export interface MessageProps {
    recordingState: RecordingState;
}

export default function Message(props: MessageProps) {
    return (
        <StyledRoot>
            {props.recordingState === "waiting" && "Click the button to record your beautiful voice. "}
            {props.recordingState === "recording" && "recording..."}
            {props.recordingState === "finished" && "Thank you! Below you can listen to your recording and process it"}
        </StyledRoot>
    );
}
