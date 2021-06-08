import styled from "styled-components";

export const ImageContainer = styled.div`
  max-width: 50%;
  display: none;
  box-sizing: border-box;
  padding-left: 10vw;

  @media screen and (min-width: 1000px) {
    display: unset;
  }
`;