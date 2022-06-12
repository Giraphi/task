import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { theme } from "../style/theme";

const StyledRoot = styled.button<{ buttonType: ButtonType }>`
    display: inline-flex;
    border: ${theme.border.width} solid ${theme.color.white};
    cursor: pointer;
    background-color: transparent;
    color: ${theme.color.white};
    padding: ${theme.space.gutter * 2}px ${theme.space.gutter * 3}px;
    font-size: ${theme.typography.fontSize.p};
    font-family: "SourceCodePro", Monospaced, monospace;

    ${(props) =>
        props.buttonType === "confirm" &&
        css`
            color: ${theme.color.confirm};
            border-color: ${theme.color.confirm};
        `}
`;

type ButtonType = "default" | "confirm";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: ButtonType;
}

export default function Button(props: ButtonProps) {
    const type = props.type || "default";
    return (
        <StyledRoot onClick={props.onClick} buttonType={type}>
            {props.children}
        </StyledRoot>
    );
}
