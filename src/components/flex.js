import styled from "styled-components";

export const FlexColumnCenter = styled.div`
  width: ${p => (p.noWidth || p.noSize) ? 'initial' : '100%'};
  height: ${p => (p.noHeight || p.noSize) ? 'initial' : '100%'};
  height: 100%;
  flex-grow: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

export const FlexRowCenter = styled.div`
  width: ${p => (p.noWidth || p.noSize) ? 'initial' : '100%'};
  height: ${p => (p.noHeight || p.noSize) ? 'initial' : '100%'};
  flex-grow: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

export const FlexRowSpread = styled.div`
  width: 100%;
  display: flex;
  align-items: ${p => p.align || 'center'};
  justify-content: space-between;
  flex-flow: column;

  @media screen and (min-width: 870px) {
    flex-flow: row ${p => p.wrap || 'wrap'};
  }
`;
