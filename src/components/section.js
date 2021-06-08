import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 50px max(15vw, 20px);
  box-sizing: border-box;
  display: flex;
  align-items: ${p => p.center ? 'center' : 'flex-start'};
  flex-direction: column;
  justify-content: ${p => p.center ? 'center': 'baseline'};
  position: relative;
`;

export default Section;
