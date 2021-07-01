import { format } from "date-fns";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Banner, { BannerUnit } from "../components/banner";
import Button from "../components/button";
import { FlexColumnCenter, FlexRowSpread } from "../components/flex";
import Layout from "../components/layout";
import {
  rhoPresaleEndTime,
  rhoPresaleStartTime,
} from "../components/presale-banner";
import Section from "../components/section";
import Seo from "../components/seo";
import {
  Heading,
  Heading3,
  HeadingTag,
  Paragraph,
} from "../components/typography";

export default function RHOPage() {
  return (
    <Layout>
      <Seo
        title="$RHO: A stable foundation to build on"
        description="AstroFi is a polygon-based DeFi platform to help new DeFi projects get off the ground faster"
      />
      <Section fancy center>
        <HeadingTag center>A stable foundation to build on</HeadingTag>
        <Heading withTag center>
          A stablecoin for AstroFi
        </Heading>
        <Paragraph center style={{ maxWidth: "500px" }}>
          The $RHO token is a stablecoin pegged to $1 for apps that need stable
          collateral or investors that need to keep their money safe
        </Paragraph>
      </Section>
      <Banner>
        <BannerUnit data-sal="slide-up" data-sal-delay="300">
          <div style={{ width: "150px", height: "150px" }}>
            <StaticImage
              placeholder="blurred"
              alt="deco"
              aria-hidden="true"
              src="../images/rho deco 1.png"
            />
          </div>
        </BannerUnit>
        <BannerUnit data-sal="slide-up" data-sal-delay="400">
          <h1>1 RHO = $1</h1>
          <p>
            <span aria-hidden="true" role="img">
              💵
            </span>{" "}
            Pegged to the US Dollar
          </p>
        </BannerUnit>
        <BannerUnit data-sal="slide-up" data-sal-delay="500">
          <h1>{format(new Date(rhoPresaleStartTime), "yyyy/MM/dd")}</h1>
          <p>
            <span aria-hidden="true" role="img">
              📅
            </span>{" "}
            $RHO Presale Start
          </p>
        </BannerUnit>
      </Banner>
      <Section center>
        <HeadingTag center data-sal="slide-up" data-sal-delay="300">
          <span aria-hidden="true" role="img">
            🌟
          </span>{" "}
          $RHO StableCoin
        </HeadingTag>
        <Heading withTag center data-sal="slide-up" data-sal-delay="300">
          Work with $RHO
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
              Developers
            </HeadingTag>
            <Heading3 center withTag>
              Stable Collateral
            </Heading3>
            <Paragraph justify>
              Use the RHO coin to probide stable collateral for your innovative
              new crypto assets and primitives
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
                🖇
              </span>{" "}
              Projects
            </HeadingTag>
            <Heading3 center withTag>
              Integrate with AstroFi
            </Heading3>
            <Paragraph justify>
              Use AstroFi tokens like RHO to integrate your app or asset more
              directly with AstroFi
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
                👨‍💼
              </span>{" "}
              Investors
            </HeadingTag>
            <Heading3 center withTag>
              Keep your money safe
            </Heading3>
            <Paragraph justify>
              RHO is always worth one dollar, so you can use it to keep your
              money safe from the fluctuations of the crypto market
            </Paragraph>
          </FlexColumnCenter>
        </FlexRowSpread>
      </Section>
      <Section center fancy fancyBottom id="presale">
        <HeadingTag center data-sal="slide-up" data-sal-delay="300">
          <span aria-hidden="true" role="img">
            👊
          </span>{" "}
          Let's do this!
        </HeadingTag>
        <Heading center withTag data-sal="slide-up" data-sal-delay="300">
          Join the presale
        </Heading>
        <Paragraph
          center
          style={{ maxWidth: "500px" }}
          data-sal="slide-up"
          data-sal-delay="300"
        >
          Our presale starts{" "}
          {format(new Date(rhoPresaleStartTime), "MMMM dd, yyyy")}. It's how
          we'll raise the capital needed to unsure the full stability of the RHO
          token.
        </Paragraph>

        <div
          style={{ marginTop: "20px" }}
          data-sal="slide-up"
          data-sal-delay="300"
        >
          {/* TODO: Set presale link */}
          <Button
            primary
            to="presale-link"
            className={
              Date.now() > rhoPresaleStartTime && Date.now() < rhoPresaleEndTime
                ? ""
                : "disabled"
            }
          >
            {Date.now() > rhoPresaleStartTime
              ? Date.now() > rhoPresaleEndTime
                ? "Presale over"
                : "Go to presale"
              : "Presale not started"}
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
