import React from "react";
import { ReactComponent as Microphone } from "../icons/microphone.svg";
import styled, { css } from "styled-components";
import { theme } from "../style/theme";
import { activeBlink } from "../style/keyframes";

const StyledRoot = styled.button<{ isRecording: boolean }>`
    display: inline-flex;
    border: ${theme.border.width} solid ${theme.color.white};
    padding: ${theme.space.sm};
    border-radius: ${theme.space.lg};
    cursor: pointer;
    background-color: transparent;
    color: ${theme.color.white};

    > svg {
        height: ${theme.space.lg};
    }

    :hover {
        color: ${theme.color.red};
        border-color: ${theme.color.red};
    }

    ${(props) =>
        props.isRecording &&
        css`
            border-color: ${theme.color.red};

            > svg {
                color: ${theme.color.red};
                animation: ${activeBlink} 2s linear infinite;
            }
        `}
`;

export interface RecordButtonProps {
    onClick: () => void;
    isRecording: boolean;
}

export default function RecordButton(props: RecordButtonProps) {
    return (
        <StyledRoot onClick={props.onClick} isRecording={props.isRecording}>
            <Microphone />
        </StyledRoot>
    );
}
