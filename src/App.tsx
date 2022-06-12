import React from "react";
import { ReactComponent as Microphone } from "./microphone.svg";
import styled from "styled-components";
import { GlobalStyle } from "./style/global-style";

const StyledRoot = styled.div`
    color: red;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <StyledRoot>
                <h1>Hello</h1>
                <Microphone />
            </StyledRoot>
        </>
    );
}

export default App;
