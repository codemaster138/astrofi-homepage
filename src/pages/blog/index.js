import * as React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import Section from "../../components/section";
import SplitPage from "../../components/split-page";
import {
  Heading,
  Heading2,
  HeadingTag,
  Paragraph,
} from "../../components/typography";
import BlogPostBig from "../../components/blog-post-big";
import BlogPostSmall from "../../components/blog-post-small";
import { graphql } from "gatsby";
import Button from "../../components/button";
import { FlexRowSpread } from "../../components/flex";

const RightSide = styled.div`
  width: 47.5vw;
  margin-left: 5vw;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export default function BlogPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <Section center fancy>
        <SplitPage>
          <div>
            <Heading>AstroFi Blog</Heading>
            <Paragraph>
              This is the AstroFi blog, where we share tips, tricks, information
              & announcements about AstroFi tech.
            </Paragraph>
            <Paragraph>
              We'll be frequently publishing our progress to keep maximum
              transparency for developers & and investors using AstroFi
            </Paragraph>
            <div style={{ marginTop: "20px" }}>
              <Button primary to="#posts">
                Explore Posts
              </Button>
              <Button to="/">Back Home</Button>
            </div>
          </div>
          <RightSide>
            <BlogPostBig
              title={edges[0].node.frontmatter.title}
              description={edges[0].node.excerpt}
              to={`/blog/posts/${edges[0].node.frontmatter.slug}`}
              cover={
                edges[0].node.frontmatter.cover.childImageSharp.gatsbyImageData
              }
            />
          </RightSide>
        </SplitPage>
      </Section>
      <Section id="posts">
        <HeadingTag data-sal="slide-up" data-sal-delay="300">Stay up to date</HeadingTag>
        <Heading centerMobile withTag data-sal="slide-up" data-sal-delay="300">
          Newest Posts
        </Heading>
        <FlexRowSpread wrap="nowrap">
          {edges.slice(0, 2).map(edge => (
            <BlogPostBig
              data-sal="slide-up" data-sal-delay="300"
              title={edge.node.frontmatter.title}
              description={edge.node.excerpt}
              to={`/blog/posts/${edge.node.frontmatter.slug}`}
              cover={
                edge.node.frontmatter.cover.childImageSharp.gatsbyImageData
              }
            />
          ))}
        </FlexRowSpread>
      </Section>
      {edges.length > 2 && (
        <Section id="old-posts" fancy fancyBottom>
          <HeadingTag data-sal="slide-up" data-sal-delay="300">All the knowledge</HeadingTag>
          <Heading2 withTag data-sal="slide-up" data-sal-delay="300">More Posts</Heading2>
          <FlexRowSpread>
            {edges.slice(2).map(edge => (
              <BlogPostSmall
              data-sal="slide-up" data-sal-delay="300"
                title={edge.node.frontmatter.title}
                description={edge.node.excerpt.slice(0, 60) + "..."}
                to={`/blog/posts/${edge.node.frontmatter.slug}`}
                cover={
                  edge.node.frontmatter.cover.childImageSharp.gatsbyImageData
                }
              />
            ))}
          </FlexRowSpread>
        </Section>
      )}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
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
    }
  }
`;
