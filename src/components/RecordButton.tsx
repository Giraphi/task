import React from "react";
import { ReactComponent as Microphone } from "../icons/microphone.svg";
import styled from "styled-components";
import { theme } from "../style/theme";

const StyledRoot = styled.div`
    display: inline-flex;
    border: ${theme.border.width} solid ${theme.color.white};
    padding: ${theme.space.sm};
    border-radius: ${theme.space.lg};
    cursor: pointer;

    > svg {
        height: ${theme.space.lg};
    }

    :hover {
        color: ${theme.color.red};
        border-color: ${theme.color.red};
    }
`;

export interface RecordButtonProps {}

export default function RecordButton(props: RecordButtonProps) {
    return (
        <StyledRoot>
            <Microphone />
        </StyledRoot>
    );
}
