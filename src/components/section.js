import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 0px max(15vw, 20px);
  box-sizing: border-box;
  display: flex;
  align-items: ${p => p.center ? 'center' : 'flex-start'};
  justify-content: baseline;
`;

export default Section;
