import * as React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import PresaleBanner, {
  presaleEndTime,
  presaleStartTime,
} from "../components/presale-banner";
import Section from "../components/section";
import Seo from "../components/seo";
import { Heading, HeadingTag, Paragraph } from "../components/typography";

const PresalePage = () => {
  return (
    <Layout>
      <Seo
        title="AstroFi $XAI Presale"
        description="Help us help you by investing in our $XAI presale"
      />
      <Section center fancy>
        <HeadingTag center>Help us help you</HeadingTag>
        <Heading center withHeader>
          Buy $XAI Tokens Pre-Launch
        </Heading>
        <Paragraph style={{ maxWidth: "500px" }} center>
          We want to make launching tokens easier, but that only works if our
          token is launched. To help us, and to secure your stake in AstroFi
          governance, buy $XAI from our presale
        </Paragraph>
        <div style={{ marginTop: "20px" }}>
          {/* TODO: Set presale link */}
          <Button
            primary
            to="https://app.astrofi.io/"
            className={
              Date.now() > presaleStartTime && Date.now() < presaleEndTime
                ? ""
                : "disabled"
            }
          >
            {Date.now() > presaleStartTime
              ? Date.now() > presaleEndTime
                ? "Presale over"
                : "Go to presale"
              : "Presale not started"}
          </Button>
        </div>
      </Section>
      <PresaleBanner />
      <Section center fancy fancyBottom>
        <HeadingTag center data-sal="slide-up" data-sal-delay="300">
          Our Masterplan
        </HeadingTag>
        <Heading center withTag data-sal="slide-up" data-sal-delay="400">
          Our Roadmap
        </Heading>
        <Paragraph style={{ maxWidth: "500px" }} center data-sal="slide-up" data-sal-delay="500">
          Click the button below to view the roadmap and track development
          progress
        </Paragraph>
        <Button primary to="/roadmap" style={{ marginTop: "20px" }} data-sal="slide-up" data-sal-delay="600">View Roadmap</Button>
      </Section>
    </Layout>
  );
};

export default PresalePage;
