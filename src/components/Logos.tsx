import styled from "styled-components";
import logo from "./../assets/triple2x.png";
import { AnimationStyle } from "./AnimationStyle";

const LogoContainer = styled.div`
  position: relative;
  background-image: url(${logo});
  background-size: 400px 338px;
  background-repeat: no-repeat;
  width: 500px;
  height: 400px;
`;
const LogoText = styled.p`
  font-size: 15px;
  position: absolute;
  color: rgba(58, 58, 58, 0.7);
  left: 28%;
  top: 63%;
`;

const Logos = () => {
  return (
    <AnimationStyle delay={0}>
      <LogoContainer>
        <LogoText>2021년 12월 기준</LogoText>
      </LogoContainer>
    </AnimationStyle>
  );
};

export default Logos;
