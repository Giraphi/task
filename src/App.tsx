import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style/global-style";
import LayoutContainer from "./components/LayoutContainer";
import { theme } from "./style/theme";
import RecordButton from "./components/RecordButton";

const StyledRoot = styled.div`
    min-height: 100vh;
    background-color: ${theme.color.black};
`;

const StyledIconRow = styled.div`
    display: flex;
    justify-content: center;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <StyledRoot>
                <LayoutContainer>
                    <h1>Hi there :)</h1>
                    <p>Click the button to record your voice. </p>

                    <RecordButton />
                </LayoutContainer>
            </StyledRoot>
        </>
    );
}

export default App;
