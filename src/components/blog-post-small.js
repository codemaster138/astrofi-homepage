import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

const SmallBlogPostContainer = styled(Link)`
  text-decoration: none;
  width: min(100%, 90vw);
  max-width: 500px;
  background-color: ${p => p.theme.bg};
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: ${p =>
    p.theme.name === "light"
      ? "linear-gradient(135deg, #55117c00, #6815c703)"
      : "linear-gradient(135deg, #1e032e20, #2b09525f)"};

  transition: 300ms;

  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0px 10px 30px #1c0e2c10;
  }

  @media screen and (min-width: 1000px) {
    width: min(100%, 50vw);
  }
`;

const ImageContainer = styled.div`
  margin: 0;
  padding: 0;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 130px;
  flex-shrink: 0;
  margin-right: 30px;

  img {
    height: 130px;
    width: 130px;
    object-fit: cover;
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;

  h1 {
    color: ${p => p.theme.fg};
    font-size: 24px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
  }
`;

export default function BlogPostSmall(props) {
  return (
    <SmallBlogPostContainer {...props}>
      <ImageContainer>
        <GatsbyImage
          image={props.cover}
          alt="Post cover"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      </ImageContainer>
      <BodyContainer>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </BodyContainer>
    </SmallBlogPostContainer>
  );
}
