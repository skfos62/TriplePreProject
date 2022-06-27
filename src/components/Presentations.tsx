import styled from "styled-components";
import Awards from "./Awards";
import PresentationItem from "./PresentationItem";
import { AnimationStyle } from "./AnimationStyle";
import { AnimationCounterStyle } from "./AnimationCounterStyle";

const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Presentations = () => {
  const items = [
    { number: 700, middleTitle: "만 명", subTitle: "여행자" },
    { number: 100, middleTitle: "만 개", subTitle: "여행 리뷰" },
    { number: 470, middleTitle: "만 개", subTitle: "여행 일정" }
  ];
  return (
    <>
      <PresentationContainer>
        <AnimationStyle delay={100}>
          {items.map((item, index) => (
            <PresentationItem
              key={index}
              number={item.number}
              middleTitle={item.middleTitle}
              subTitle={item.subTitle}
            />
          ))}
        </AnimationStyle>
        <AnimationStyle delay={200}>
          <Awards />
        </AnimationStyle>
      </PresentationContainer>
    </>
  );
};

export default Presentations;
