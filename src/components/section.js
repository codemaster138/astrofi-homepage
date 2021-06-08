import styled from "styled-components";
import Color from "color";

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
  background: ${p => p.fancy ? `radial-gradient(circle at ${p.fancyBottom ? 'bottom' : 'top'}, ${Color(p.theme.primary).alpha(p.theme.name === 'light' ? 0.1 : 0.5).rgb().toString()}, ${p.theme.background})` : p.theme.background};
`;

export default Section;
