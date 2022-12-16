import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  /* min-height: 100vh; */
  /* display: flex; */
  /* flex: 1; */
  height: 100vh;
  /* width: 100vh; */
  /* align-items: center;
  justify-content: center; */
`;

const OuterBox = styled.div`
  background-color: #282c34;
  height: 100vh;
  /* padding-bottom: 100px;
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px; */

  /* height: 100vh; */
  /* margin-top: 100px; */

  display: flex;
  /* flex: 1; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex: 1; */

  /* height: 100vh; */

  /* max-height: 100vh;
  max-width: 100vh;
  min-height: 500px;
  min-width: 500px; */

  /* width: 100vh;
  height: 100vh; */
`;

const InnerBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  height: 80%;
  width: 95%;
  /* height: 100vh; */
`;

const LeftBox = styled.div`
  background-color: blue;
  height: 100%;
  width: 30%;
  border-radius: 15px;
`;

const RightBox = styled.div`
  /* background-color: yellow; */
  height: 100%;
  width: 70%;
  border-radius: 15px;
`;

const Home = () => {
  return (
    <Container>
      <OuterBox>
        <InnerBox>
          <LeftBox></LeftBox>
          <RightBox></RightBox>
        </InnerBox>
      </OuterBox>
    </Container>
  );
};

export default Home;
