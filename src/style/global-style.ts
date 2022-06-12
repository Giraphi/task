import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

// Include fonts via plain css instead of styled-components to avoid font flickering in some cases.
import "./font-faces.css";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "SourceCodePro", Monospaced, monospace;
        color: ${theme.color.white};
    }

    * {
        box-sizing: border-box;
    }

    p {
        margin-top: 0;
        margin-bottom: ${theme.space.sm};
        font-size: ${theme.typography.fontSize.p};
        line-height: ${theme.typography.lineHeight.p};
    }

    h1 {
        margin-top: 0;
        margin-bottom: ${theme.space.md};
        font-size: ${theme.typography.fontSize.h1};
        line-height: ${theme.typography.lineHeight.h1};
    }
`;
