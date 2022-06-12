import React from "react";
import styled from "styled-components";
import Button from "./button";
import { theme } from "../style/theme";

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledAudio = styled.audio`
    margin-bottom: ${theme.space.md};
`;

export interface AudioPlayerProps {
    audioSrc?: string;
}

export default function AudioContainer(props: AudioPlayerProps) {
    function handleButtonClick() {
        // Use Axios or another client to send the audio blob to the server
        alert("This is not implemented yet");
    }

    return (
        <StyledRoot>
            {props.audioSrc && (
                <>
                    <StyledAudio controls src={props.audioSrc} />
                    <Button onClick={handleButtonClick} type={"confirm"}>
                        Process audio
                    </Button>
                </>
            )}
        </StyledRoot>
    );
}
