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
import { FlexColumnCenter, FlexRowSpread } from "../components/flex";
import { ImageContainer } from "../components/image-container";

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
      <Section id="hero" center fancy>
        <SplitPage>
          <div>
            <HeadingTag>Reach for the stars</HeadingTag>
            <Heading withTag>Build DeFi projects faster</Heading>
            <Paragraph>
              AstroFi is an polygon-based platform that takes care of all the
              hard stuff in crypto so you can focus on innovation
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
              src="../images/astrofi deco 5.png"
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
        <HeadingTag data-sal="slide-up" data-sal-delay="300">
          <span aria-hidden="true" role="img">
            🚚
          </span>{" "}
          Our Services
        </HeadingTag>
        <Heading center withTag data-sal="slide-up" data-sal-delay="300">
          Accellerate your DeFi project
        </Heading>
        <FlexRowSpread style={{ marginTop: "40px" }} align="baseline">
          <FlexColumnCenter
            noWidth
            style={{ maxWidth: "300px" }}
            data-sal="slide-up"
            data-sal-delay="300"
          >
            <HeadingTag>
              <span aria-hidden="true" role="img">
                🔨
              </span>{" "}
              Step 1
            </HeadingTag>
            <Heading3 center withTag>
              Build on AstroFi
            </Heading3>
            <Paragraph justify>
              AstroFi provides a suite of DeFi contracts like stablecoins and
              governance so you don't have to reinvent the wheel
            </Paragraph>
          </FlexColumnCenter>
          <FlexColumnCenter
            noWidth
            style={{ maxWidth: "300px" }}
            data-sal="slide-up"
            data-sal-delay="500"
          >
            <HeadingTag>
              <span aria-hidden="true" role="img">
                🚀
              </span>{" "}
              Step 2
            </HeadingTag>
            <Heading3 center withTag>
              Presale
            </Heading3>
            <Paragraph justify>
              Run an AstroSale Presale to raise capital for your project quickly
              and in a place where investors can easily find you
            </Paragraph>
          </FlexColumnCenter>
          <FlexColumnCenter
            noWidth
            style={{ maxWidth: "300px" }}
            data-sal="slide-up"
            data-sal-delay="700"
          >
            <HeadingTag>
              <span aria-hidden="true" role="img">
                🦄
              </span>{" "}
              Step 3
            </HeadingTag>
            <Heading3 center withTag>
              Launch
            </Heading3>
            <Paragraph justify>
              Once your presale is over, deploy your project's smart contracts to
              ethereum mainnet
            </Paragraph>
          </FlexColumnCenter>
        </FlexRowSpread>
      </Section>
      <Section id="find-investments" center fancy fancyBottom>
        <HeadingTag center data-sal="slide-up" data-sal-delay="300">
          <span aria-hidden="true" role="img">
            📈
          </span>{" "}
          Invest in Startups
        </HeadingTag>
        <Heading center withTag data-sal="slide-up" data-sal-delay="300">
          Find the right investments
        </Heading>
        <Paragraph
          center
          style={{ maxWidth: "550px" }}
          data-sal="slide-up"
          data-sal-delay="300"
        >
          AstroFi provides a community-curated list of startups to invest in.
          You can also read about our oppinions on our blog.
        </Paragraph>
        <div
          style={{ marginTop: "20px" }}
          data-sal="slide-up"
          data-sal-delay="300"
        >
          <Button primary to="/presale">
            Join Presale
          </Button>
          <Button to="/blog">Our blog</Button>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
