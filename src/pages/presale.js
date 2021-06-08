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

const PresalePage = () => (
  <Layout>
    <Seo
      title="AstroFi $XAI Presale"
      description="Help us help you by investing in our $XAI presale"
    />
    <Section center>
      <HeadingTag center>Help us help you</HeadingTag>
      <Heading center withHeader>
        Buy $XAI Tokens Pre-Sale
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
          to="presale-link"
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
  </Layout>
);

export default PresalePage;
