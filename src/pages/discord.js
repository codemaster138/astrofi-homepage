import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Section from "../components/section";
import { Heading, Paragraph } from "../components/typography";
import Button from "../components/button";

const SecondPage = () => (
  <Layout>
    <Seo title="Coming Soon" description="The AstroFi discord is not available yet" />
    <Section center>
      <Heading center>Coming Soon</Heading>
      <Paragraph center>We haven't launched our discord server yet</Paragraph>
      <Button style={{ marginTop: '20px' }} primary to="/">Back Home</Button>
    </Section>
  </Layout>
);

export default SecondPage;
