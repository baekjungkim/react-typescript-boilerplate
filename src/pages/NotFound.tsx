import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 16px;
  }

  a {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    .hover\:underline:hover {
      text-decoration: underline;
    }
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Helmet>
        <title>Not Found | thegraphicnovels</title>
      </Helmet>
      <h2 className="mt-4">Page Not Found.</h2>
      <h4>The page does not exists.</h4>
      <Link to="/">Go back home &rarr;</Link>
    </Container>
  );
};

export default NotFound;
