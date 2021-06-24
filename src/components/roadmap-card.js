import styled from "styled-components";
import Color from "color";

export const RoadmapCard = styled.div`
  width: 100%;
  background: transparent;
  border-radius: 10px;
  padding: 24px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  background: ${p => Color(p.theme.background_shade).alpha(0.7).rgb().toString()};

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 13px;
  }

  span.status {
    --color: ${p => p.theme.medium_shade};
    border: 1px solid var(--color);
    color: var(--color);
    border-radius: 5px;
    padding: 5px 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    white-space: pre;
    margin-left: 40px;

    &::before {
      content: "";
      width: 9px;
      height: 9px;
      display: inline-block;
      background: var(--color);
      border-radius: 12px;
      margin-right: 10px;
    }

    &.status-current {
      --color: ${p => p.theme.warning}
    }

    &.status-done {
      --color: ${p => p.theme.success};
    }
  }
`;
