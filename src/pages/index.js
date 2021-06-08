import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SplitPage from "../components/split-page";
import { Heading, Paragraph } from "../components/typography";
import Section from "../components/section";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import Button from "../components/button";
import PresaleBanner from "../components/presale-banner";

const ImageContainer = styled.div`
  max-width: 50%;
  display: none;
  box-sizing: border-box;
  padding-left: 10vw;

  @media screen and (min-width: 1000px) {
    display: unset;
  }
`;

const Buttons = styled.div`
  margin-top: 40px;
`;

const IndexPage = function () {
  return (
    <Layout>
      <Seo
        title="AstroFi: Fasttrack your crypto application's launch"
        description="AstroFi is an ethereum-based DeFi platform to help new DeFi projects find early investors and vice-versa"
      />
      <Section id="hero" center>
        <SplitPage>
          <div>
            <Heading style={{ marginTop: 0 }}>
              Fasttrack your crypto token launch
            </Heading>
            <Paragraph>
              AstroFi is an ethereum-based platform to help new DeFi projects
              find early investment and vice-versa
            </Paragraph>
            <Buttons>
              <Button primary to="/#presale-status">
                Learn More
              </Button>
              <Button to="/blog">Our Blog</Button>
            </Buttons>
          </div>
          <ImageContainer>
            <StaticImage
              placeholder="blurred"
              src="../images/astrofi deco.png"
              alt="Deco"
              aria-hidden="true"
              id="deco-image"
              style={{ maxWidth: "100%" }}
            />
          </ImageContainer>
        </SplitPage>
      </Section>
      <PresaleBanner/>
    </Layout>
  );
};

export default IndexPage;
