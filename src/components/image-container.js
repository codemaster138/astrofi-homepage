import styled from "styled-components";

export const ImageContainer = styled.div`
  max-width: 50%;
  display: none;
  box-sizing: border-box;
  padding-left: 10vw;
  position: relative;

  .only-light {
    display: ${p => p.theme.name === 'light' ? 'block' : 'none'};
    * {
      ${p => p.theme.name === 'light' ? '' : 'display: none;'}
    }
  }

  .only-dark {
    display: ${p => p.theme.name === 'dark' ? 'block' : 'none'};
    * {
      ${p => p.theme.name === 'dark' ? '' : 'display: none;'}
    }
  }

  @media screen and (min-width: 1000px) {
    display: unset;
  }
`;