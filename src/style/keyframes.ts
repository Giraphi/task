import { keyframes } from "styled-components";

export const activeBlink = keyframes`
    0% {
        opacity: 1;
    }

    10% {
        opacity: 0.9;
    }

    50% {
        opacity: 0;
    }

    90% {
        opacity: 0.9;
    }

    100% {
        opacity: 1;
    }`;
