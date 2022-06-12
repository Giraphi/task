import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../style/theme";

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.space.lg} ${theme.space.sm};

    @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.space.lg} ${theme.space.lg};
    }
`;

export interface LayoutContainerProps {
    children: ReactNode;
}

export default function LayoutContainer(props: LayoutContainerProps) {
    return <StyledRoot>{props.children}</StyledRoot>;
}
