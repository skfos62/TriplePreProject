import styled, { keyframes } from "styled-components";

const counter = (to: number) => keyframes`
    to {
      ${to}: 100;
    }
`;

export const AnimationCounterStyle = styled.div<{ startNumber: number }>`
  opacity: 0;
  counter-reset: my-counter var(--num);
  content: counter(my-counter);
  animation: ${counter(100)} 5s infinite alternate ease-in-out;
`;
