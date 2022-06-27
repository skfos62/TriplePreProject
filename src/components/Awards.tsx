import styled from "styled-components";
import appleAward from "./../assets/badge-apple4x.png";
import playStoreAward from "./../assets/play-store2x.png";

const AwardsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 40px;
`;
const AwardsWrapper = styled.div<{ url: string }>`
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: 54px;
  background-repeat: no-repeat;
  width: 200px;
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
`;

const Awards = () => {
  return (
    <>
      <AwardsContainer>
        <AwardsWrapper url={playStoreAward}>
          <AwardText>
            2018 구글 플레이스토어 <br />
            올해의 앱 최우수상 수상
          </AwardText>
        </AwardsWrapper>
        <AwardsWrapper url={appleAward}>
          <AwardText>
            2018 구글 플레이스토어 <br />
            올해의 앱 최우수상 수상
          </AwardText>
        </AwardsWrapper>
      </AwardsContainer>
    </>
  );
};

export default Awards;
