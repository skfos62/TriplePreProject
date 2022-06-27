import styled, { keyframes } from "styled-components";

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const AnimationStyle = styled.div<{ delay: number }>`
  opacity: 0;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-name: ${fadeSlideUp};
  animation-delay: ${props => props.delay}ms;
  animation-fill-mode: forwards;
`;
