import styled from "styled-components";
import appleAward from "./../assets/badge-apple4x.png";
import playStoreAward from "./../assets/play-store2x.png";

interface Awards {
  url: string;
  awardHistory: string;
}

const AwardsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 40px;
`;
const AwardsWrapper = styled.div<{ url: string }>`
  position: relative;
  background-image: url(${props => props.url});
  background-size: 54px;
  background-repeat: no-repeat;
  width: 210px;
  height: 64px;
`;
const AwardText = styled.p`
  margin: 0;
  lien-height: 10px;
  font-size: 14px;
  position: absolute;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  left: 30%;
  top: 10%;
  text-align: left;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const Awards = () => {
  const items: Awards[] = [
    {
      url: playStoreAward,
      awardHistory: `2018 구글 플레이스토어\n올해의 앱 최우수상 수상`
    },
    {
      url: appleAward,
      awardHistory: `2018 애플 앱스토어\n오늘의 여행앱 선정`
    }
  ];
  return (
    <>
      <AwardsContainer>
        {items.map((item, index) => (
          <AwardsWrapper url={item.url} key={index}>
            <AwardText>{item.awardHistory}</AwardText>
          </AwardsWrapper>
        ))}
      </AwardsContainer>
    </>
  );
};

export default Awards;
