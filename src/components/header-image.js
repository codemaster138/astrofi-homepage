import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledHeaderImageWrapper = styled.div`
  width: 100vw;

  * {
    border-radius: 0px !important;
  }

  img {
    width: 100vw;
    height: 65vh !important;
    object-fit: cover !important;
  }
`;

export default function HeaderImage(props) {
  return (
    <StyledHeaderImageWrapper>
      <GatsbyImage
        image={props.image}
        alt="Post cover"
        width="100vw"
        style={{ maxWidth: "100%" }}
      />
    </StyledHeaderImageWrapper>
  );
}
