import { render } from "@testing-library/react";
import styled from "styled-components";
import PresentationItem from "./PresentationItem";
import Awards from "./Awards";

const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Presentations = () => {
  const items = [
    { numberTitle: "700만 명", subTitle: "여행자" },
    { numberTitle: "100만 개", subTitle: "여행 리뷰" },
    { numberTitle: "470만 개", subTitle: "여행 일정" }
  ];
  return (
    <PresentationContainer>
      {items.map(item => (
        <PresentationItem
          numberTitle={item.numberTitle}
          subTitle={item.subTitle}
        />
      ))}
      <Awards />
    </PresentationContainer>
  );
};

export default Presentations;
