import { keyframes } from "styled-components";

export const activeBlink = keyframes`
    0% {
        opacity: 0
    }

    40% {
        opacity: 0.9;
    }

    50% {
        opacity: 1;
    }

    60% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
    }`;
