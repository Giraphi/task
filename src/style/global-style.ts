import { createGlobalStyle } from "styled-components";
import SourceCodePro from "../fonts/source-code-pro-regular.woff";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "SourceCodePro";
        src: url(${SourceCodePro}) format("woff");
    }

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
