import * as React from "react";
import Button from "../components/button";
import { FlexColumnCenter, FlexRowSpread } from "../components/flex";
import Layout from "../components/layout";
import PresaleBanner from "../components/presale-banner";
import Section from "../components/section";
import Seo from "../components/seo";
import {
  Heading,
  Heading3,
  HeadingTag,
  Paragraph,
} from "../components/typography";

export default function AstroSale() {
  return (
    <Layout>
      <Seo
        title="AstroSale: Launch & Invest in crypto startups"
        description="AstroSale connects crypto startups to investors"
      />
      <Section center fancy>
        <HeadingTag>
          <span aria-hidden="true" role="img">
            👽
          </span>{" "}
          AstroSale
        </HeadingTag>
        <Heading>The Crypto Startup Hub</Heading>
        <Paragraph center style={{ maxWidth: "550px" }}>
          AstroSale allows crypto startups to raise capital and investors to
          find startups to invest in
        </Paragraph>
        <div style={{ marginTop: "20px" }}>
          <Button primary to="/presale">
            Join Presale
          </Button>
          <Button to="/blog">Our blog</Button>
        </div>
      </Section>
      <PresaleBanner />
      <Section center>
        <HeadingTag center data-sal="slide-up" data-sal-delay="300">
          <span aria-hidden="true" role="img">
            🤯
          </span>{" "}
          Advantages
        </HeadingTag>
        <Heading withTag center data-sal="slide-up" data-sal-delay="300">
          Why AstroSale?
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
                🏦
              </span>{" "}
              Investor Network
            </HeadingTag>
            <Heading3 center withTag>
              Startup & Investor Network
            </Heading3>
            <Paragraph justify>
              AstroSale provides a community-curated ranking of presales so that
              projects can be discovered by investors & vice-versa
            </Paragraph>
          </FlexColumnCenter>
          <FlexColumnCenter
            noWidth
            style={{ maxWidth: "300px" }}
            data-sal="slide-up"
            data-sal-delay="400"
          >
            <HeadingTag>
              <span aria-hidden="true" role="img">
                🚔
              </span>{" "}
              Security
            </HeadingTag>
            <Heading3 center withTag>
              Minimize your risk
            </Heading3>
            <Paragraph justify>
              AstroSale uses an innovative model for presales that allows for
              minimizing financial risk for investors without compromises for
              startups
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
}
