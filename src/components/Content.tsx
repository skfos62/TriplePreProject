import styled from "styled-components";
import Logos from "./Logos";
import Presentations from "./Presentations";

const CommonLayout = styled.div`
  display: flex;
  background-color: white;
  width: 1200px;
  margin: 50px;
`;

const Content = () => {
  return (
    <CommonLayout>
      <Logos />
      <Presentations />
    </CommonLayout>
  );
};

export default Content;
