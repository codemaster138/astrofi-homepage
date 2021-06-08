import styled from "styled-components";

export const HeadingTag = styled.h3`
  font-size: 18px;
  font-weight: 500px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${p => p.theme.primary};
`;

export const Heading = styled.h1`
  font-size: clamp(36px, 4.2vw, 60px);
  margin-bottom: 20px;
  text-align: ${p => (p.center ? "center" : "left")};
  margin-top: ${p => (p.withTag ? "0px" : "initial")};
`;

export const Heading2 = styled.h2`
  font-size: clamp(24px, 3.3vw, 48px);
  margin-bottom: 20px;
  text-align: ${p => (p.center ? "center" : "left")};
  margin-top: ${p => (p.withTag ? "0px" : "initial")};
`;

export const Heading3 = styled.h3`
  font-size: clamp(20px, 2.5vw, 36px);
  margin-bottom: 20px;
  text-align: ${p => (p.center ? "center" : "left")};
  margin-top: ${p => (p.withTag ? "0px" : "initial")};
  font-weight: 500;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  text-align: ${p => (p.center ? "center" : (p.justify ? "justify" : "left"))};
  ${p => p.lastJustify ? "text-align-last: justify;" : ""}
`;
