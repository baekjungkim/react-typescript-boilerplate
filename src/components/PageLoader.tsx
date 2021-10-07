import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLoader = () => {
  return (
    <Container>
      <span>Loading</span>
    </Container>
  );
};

export default PageLoader;
