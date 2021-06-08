import styled from "styled-components";

const Banner = styled.section`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  padding: 30px max(15vw, 20px);
  box-sizing: border-box;
  min-height: 30px;

  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.primary_contrast} !important;

  * {
    color: ${p => p.theme.primary_contrast} !important;
  }

  @media screen and (min-width: 500px) {
    flex-flow: row wrap;
  }
`;

export const BannerUnit = styled.div`
  margin: 10px;

  h1 {
    text-align: center;
    font-size: 32px;
    margin: 5px;
  }

  p {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

export default Banner;
