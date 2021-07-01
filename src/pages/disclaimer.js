import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Section from "../components/section";
import Seo from "../components/seo";
import SplitPage from "../components/split-page";
import {
  Heading,
  Heading3,
  Heading4,
  HeadingTag,
  Paragraph,
} from "../components/typography";

const TableOfContents = styled.div``;

export default function Policy() {
  return (
    <Layout>
      <Seo
        title="AstroFi disclaimer"
        description="A quick legal disclaimer"
      />
      <Section fancy center>
          <div style={{ maxWidth: "500px" }}>
            <HeadingTag>Legal Information</HeadingTag>
            <Heading>Disclaimer</Heading>
          </div>
      </Section>
    </Layout>
  );
}
