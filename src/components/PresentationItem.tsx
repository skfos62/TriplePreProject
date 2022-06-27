import styled from "styled-components";

interface PresentationItemProps {
  numberTitle: string;
  subTitle: string;
}

const PresentationText = styled.p`
  text-align: left;
  font-size: 36px;
  color: rgb(58, 58, 58);
  margin: 10px 0;
  letter-spacing: -1px;
`;

const PresentationItem = ({ numberTitle, subTitle }: PresentationItemProps) => {
  return (
    <PresentationText>
      <strong>{numberTitle}</strong>의 {subTitle}
    </PresentationText>
  );
};

export default PresentationItem;
