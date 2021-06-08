import * as React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import Seo from "../components/seo";
import { Heading, Paragraph } from "../components/typography";
import SplitPage from "../components/split-page";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/button";
import { ImageContainer } from "../components/image-container";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Section center>
      <SplitPage>
        <div>
          <Heading>Page Not Found</Heading>
          <Paragraph>
            “Mommy, do you believe in aliens?” – “Yes, Tommy. They stole the
            website.”
          </Paragraph>
          <div style={{ marginTop: '20px' }}>
            <Button primary to="/">Back Home</Button>
          </div>
        </div>
        <ImageContainer>
          <StaticImage
            placeholder="blurred"
            src="../images/404.png"
            alt="Deco"
            aria-hidden="true"
            id="deco-image"
            style={{ maxWidth: "100%" }}
          />
        </ImageContainer>
      </SplitPage>
    </Section>
  </Layout>
);

export default NotFoundPage;
