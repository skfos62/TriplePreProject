import styled from "styled-components";
import CountNumber from "./Counter";
import { AnimationCounterStyle } from "./AnimationCounterStyle";

interface PresentationItemProps {
  number: number;
  middleTitle: string;
  subTitle: string;
}

const PresentationText = styled.p`
  text-align: left;
  font-size: 36px;
  color: rgb(58, 58, 58);
  margin: 10px 0;
  letter-spacing: -1px;
`;

const PresentationItem = ({
  number,
  middleTitle,
  subTitle
}: PresentationItemProps) => {
  return (
    <PresentationText>
      <strong>
        <CountNumber start={0} end={number} />
        {middleTitle}
      </strong>
      의 {subTitle}
    </PresentationText>
  );
};

export default PresentationItem;
