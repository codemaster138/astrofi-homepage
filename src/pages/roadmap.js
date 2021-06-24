import * as React from "react";
import Layout from "../components/layout";
import PresaleBanner from "../components/presale-banner";
import { RoadmapCard } from "../components/roadmap-card";
import Section from "../components/section";
import Seo from "../components/seo";
import { Heading, HeadingTag, Paragraph } from "../components/typography";

const PresalePage = () => {
  return (
    <Layout>
      <Seo
        title="AstroFi Roadmap"
        description="Track our project development progress & and goals"
      />
      <Section center fancy>
        <HeadingTag center data-sal="slide-up" data-sal-delay="300">Our Masterplan</HeadingTag>
        <Heading center withHeader data-sal="slide-up" data-sal-delay="400">
          Our Roadmap
        </Heading>
        <Paragraph style={{ maxWidth: "500px" }} center data-sal="slide-up" data-sal-delay="500">
          On our roadmap, you can see our goals & progress in developing the
          AstroFi project
        </Paragraph>
        <div style={{ maxWidth: "500px" }}>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>Launch Website</h1>
              <p>Build & launch the AstroFi Website and Blog</p>
            </div>
            <span className="status status-current">In progress</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>Launch AstroFi Presale</h1>
              <p>Launch the XAI token, presale contract and base presale app</p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>Launch AstroFi Governance</h1>
              <p>
                Launch the AstroFi Governance contract to allow investors to
                control the AstroFi protocol
              </p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSale public beta</h1>
              <p>
                Begin allowing users to list their own presales on the platform
              </p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSale ICO public beta</h1>
              <p>Begin allowing users to list their ICOs on the platform</p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSale & AstroSale ICO multi-chain compatibility</h1>
              <p>Bring AstroSale & AstroSale ICO to layer 2 ethereum chains</p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSale & AstroSale ICO Cardano compatibility</h1>
              <p>Bring AstroSale & AstroSale ICO to the cardanano blockchain (after Cardano Smart Contract launch)</p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSale & AstroSale ICO Launch</h1>
              <p>
                Officially release AstroSale and AstroSale ICO to the general
                public
              </p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSwap Alpha</h1>
              <p>
                Begin development of AstroFi's DeFi Token Exchange
              </p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSwap Beta</h1>
              <p>
                Public beta of the AstroFi DEX
              </p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSwap NFT</h1>
              <p>
                Add NFTs to AstroSwap
              </p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
          <RoadmapCard data-sal="slide-up" data-sal-delay="300">
            <div>
              <h1>AstroSwap Launch</h1>
              <p>
                Officially release AstroSwap to the general public
              </p>
            </div>
            <span className="status">Coming soon</span>
          </RoadmapCard>
        </div>
      </Section>
      <PresaleBanner />
    </Layout>
  );
};

export default PresalePage;
