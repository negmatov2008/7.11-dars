import { styled } from "styled-components";

const Container = styled.div`
  max-width: 311px;
  margin: 0 auto;

  @media screen and (min-width: 760px) {
    max-width: 689px;
  }
  @media screen and (min-width: 1340px) {
    max-width: 1111px;
  }
`;

export default Container;
