import React from "react";
import { graphql } from "gatsby";
import Section from "../../../components/section";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledSection = styled(Section)`
  h1 {
    font-size: 48px;
    font-weight: 600;
  }

  h1.title {
    font-size: 56px;
    margin-bottom: 10px;
  }

  h4.date {
    font-weight: 400;
  }

  p {
    font-size: 20px;
    opacity: 0.8;
  }

  .post-cover {
    margin-bottom: 20px;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <StyledSection fancy thin>
        <h1 class="title">{frontmatter.title}</h1>
        <h4 class="date">
          Published <time>{frontmatter.date}</time>
        </h4>
        <GatsbyImage
          image={
            data.markdownRemark.frontmatter.cover.childImageSharp
              .gatsbyImageData
          }
          alt="Post cover"
          width="100vw"
          class="post-cover"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </StyledSection>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        cover {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
