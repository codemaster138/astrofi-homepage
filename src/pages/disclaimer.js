import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import Seo from "../components/seo";
import { Heading, HeadingTag, Paragraph } from "../components/typography";

export default function Policy() {
  return (
    <Layout>
      <Seo title="AstroFi disclaimer" description="A quick legal disclaimer" />
      <Section fancy center>
        <div style={{ maxWidth: "600px" }}>
          <HeadingTag>Legal Information</HeadingTag>
          <Heading>Disclaimer</Heading>
          <Paragraph>
            AstroFi is a decentralised platform that allows people to utilise
            various financial services targeted at crypto start-ups. AstroFi
            does not ask for your information and it is the user that uses his
            discretion to send his details in the smart contracts that are
            deployed on the Polygon PoS Blockchain. Your use of AstroFi involves
            various risks, including, but not limited to, losses while digital
            assets are being supplied to the AstroFi protocol and losses due to
            the fluctuation of prices of tokens in a trading pair or liquidity
            pool. Before using the AstroFi protocol, you should review the
            relevant documentation to make sure you understand how the AstroFi
            protocol works. You can access the AstroFi protocol through multiple
            web or mobile interfaces and AstroFi has its own app. You are
            responsible for doing your own diligence on those interfaces to
            understand the fees and risks they present.
          </Paragraph>
          <Paragraph>
            AS DESCRIBED IN THE ASTROFI LICENSES, THE ASTROFI PROTOCOL IS
            PROVIDED ”AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY
            KIND. Upgrades and modifications to the token are managed in a
            community-driven way by holders of the XAI governance token. No
            developer or entity involved in creating the AstroFi protocol will
            be liable for any claims or damages whatsoever associated with your
            use, inability to use, or your interaction with other users of, the
            AstroFi protocol, including any direct, indirect, incidental,
            special, exemplary, punitive or consequential damages, or loss of
            profits, cryptocurrencies, tokens, or anything else of value.
          </Paragraph>
          <Paragraph>
            This XAI token is not a representation or warranty of any kind by
            AstroFi or its developers including any services, products, or
            operations of AstroFi or its developers. The information in this
            AstroFi website, terms of service or any other documents, does not
            constitute an encouragement, inducement, advice, or a recommendation
            by any person to participate, purchase, stake, subscribe, and or
            hold the XAI token or any other cryptographic token or currency and
            AstroFi not has authorised any person to make any such
            encouragement, inducement, advice, or recommendation. Nothing in
            this disclaimer shall be deemed to constitute a prospectus of any
            sort or a solicitation for investment, nor does it in any way
            pertain to an offering or a solicitation of an offer to buy any
            securities in any jurisdiction.
          </Paragraph>
          <Paragraph>
            Any distribution, offer or sale of XAI token or any related
            instrument will occur only on AstroFi 's terms, which are available
            (at the time of writing) at{" "}
            <Link to="/terms-of-service">
              https://www.astrofi.io/terms-of-service
            </Link>
            (the Terms). Interested parties should, amongst other things,
            conduct their own investigations and analysis of XAI, and seek
            further information and professional advice as to its use and value.
            In particular, persons contemplating acquiring XAI token should
            review the Terms, including the risk disclosure statement referenced
            in, and forming a part of the Terms. The Terms will apply to
            participants regardless of whether they get XAI tokens directly from
            AstroFi or in a secondary market transaction. 
          </Paragraph>
          <Paragraph>
            <strong>
              Express Notice To  Participants From Certain Jurisdictions.
            </strong>{" "}
            No action has been taken by us in any jurisdiction including but not
            limited to Australia, Brazil, Canada, China, Commonwealth of
            Dominica, European Economic Area, Hong Kong, India, Israel, Japan,
            Mexico, New Zealand, Singapore, South Korea, Switzerland, Taiwan,
            Thailand, United Kingdom that would permit you to  participate,
            purchase, stake, subscribe, hold or acquire tokens offered by
            AstroFi. As per the decentralized nature of AstroFi,  it is not
            possible to know whether it is legal in every jurisdiction. You must
            make your own assessment as to your ability to acquire AstroFi
            tokens pursuant to laws applicable to you.
          </Paragraph>
          <Paragraph>
            <strong>Participant Sophistication.</strong> The XAI token and other
            cryptocurrencies associated with AstroFi are speculative and involve
            a high degree of risk and uncertainty. The acquisition of these
            tokens is aimed solely at persons who have sufficient knowledge and
            understanding of blockchain and cryptographic tokens and other
            digital assets, smart contracts, storage mechanisms (such as digital
            or token wallets), and blockchain or distributed ledger technology,
            to be able to evaluate the risks and merits of an acquisition of
            these tokens and are able to bear the risks thereof, including loss
            of all amounts paid and loss of all tokens acquired. Potential
            participants must independently assess, after making such
            investigations as they consider necessary, the merits of, and their
            suitability for, acquiring any XAI tokens and other cryptocurrencies
            associated with AstroFi. Potential participants should consult their
            accounting, legal and tax representatives and advisers in order to
            evaluate the economic, legal and tax consequences of acquiring XAI
            tokens or other AstroFi cryptocurrencies. 
          </Paragraph>
          <Paragraph>
            <strong>Your Promises, Representation and Warranties</strong> By
            accessing or using AstroFi (or any part of it), you acknowledge,
            agree, represent and warrant that: (1) you have read and understood
            the risk disclosure statement that is referenced in and forms a part
            of the Terms; (2) that you are not a Restricted or Prohibited
            Person; (3) the distribution or dissemination to you of AstroFi, or
            any part of it, or its receipt or acceptance by you, is not
            prohibited or restricted by the applicable laws in your
            jurisdiction, and where any restrictions in relation to your
            receipt, acceptance or possession are applicable, you have and will
            observe and comply with all such restrictions at your own expense
            and without any liability to AstroFi or its developers; and (4) all
            of the matters set out in, referred to in these Important
            Considerations is accepted and understood by you.
          </Paragraph>
        </div>
      </Section>
    </Layout>
  );
}
