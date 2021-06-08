import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SplitPage from "../components/split-page";
import {
  Heading,
  Heading3,
  HeadingTag,
  Paragraph,
} from "../components/typography";
import Section from "../components/section";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import Button from "../components/button";
import PresaleBanner from "../components/presale-banner";
import { FlexColumnCenter, FlexRowCenter, FlexRowSpread } from "../components/flex";

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
            <Heading withTag>Fasttrack your crypto token launch</Heading>
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
      <PresaleBanner />
      <Section id="service" center>
        <HeadingTag>Our Service</HeadingTag>
        <Heading center withTag>
          Enabling anyone to launch a token
        </Heading>
        <FlexRowSpread style={{ marginTop: "40px" }} align="baseline">
          <FlexColumnCenter noWidth style={{ maxWidth: "300px" }}>
            <HeadingTag>Step 1</HeadingTag>
            <Heading3 center withTag>
              Presale
            </Heading3>
            <Paragraph justify>
              Our presale service helps raise the you need money to deploy your
              project
            </Paragraph>
          </FlexColumnCenter>
          <FlexColumnCenter noWidth style={{ maxWidth: "300px" }}>
            <HeadingTag>Step 2</HeadingTag>
            <Heading3 center withTag>
              ICO Launch
            </Heading3>
            <Paragraph justify>
              Our ICO service helps raise money after you've deployed your
              project
            </Paragraph>
          </FlexColumnCenter>
          <FlexColumnCenter noWidth style={{ maxWidth: "300px" }}>
            <HeadingTag>Step 3</HeadingTag>
            <Heading3 center withTag>
              Exchange
            </Heading3>
            <Paragraph justify>
              Once your ICO is over, provide liquidity on our exchange service
              so people can trade your token
            </Paragraph>
          </FlexColumnCenter>
        </FlexRowSpread>
      </Section>
      <Section id="find-investments" center>
        <HeadingTag center>Invest in Startups</HeadingTag>
        <Heading center withTag>Find the right investments</Heading>
        <Paragraph center style={{ maxWidth: '550px' }}>
          AstroFi provides a community-curated list of startups to invest in.
          You can also read about our oppinions on our blog.
        </Paragraph>
        <div style={{marginTop: '20px'}}>
          <Button primary to="/presale">Join Presale</Button>
          <Button to="/blog">Our blog</Button>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
