import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GithubLogo from "../images/github-logo.svg";
import DiscordLogo from "../images/discord-logo.svg";

const StyledFooter = styled.section`
  width: 100%;
  background: ${p => p.theme.background_tint};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
  padding: 30px max(15vw, 20px);
  border-top: 1px solid ${p => p.theme.background_shade};

  h3 {
    font-size: 16px;
  }

  a {
    font-size: 16px;
    display: block;
    transition: 300ms;
    font-size: 12px;
    text-decoration: none;
    opacity: 1;

    &.text {
      opacity: 0.8;
    }

    &.text-sub {
      opacity: 0.4;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  a + a {
    margin-left: 30px;
  }

  div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-flow: row wrap;
  }

  div + div {
    margin-top: 15px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter id="footer">
      <div id="socials">
        <Link to="https://github.com/astro-fi/">
          <GithubLogo width="16px" height="auto"/>
        </Link>
        <Link to="/discord">
          <DiscordLogo width="16px" height="auto"/>
        </Link>
      </div>
      <div>
        <Link to="/" className="text">Home</Link>
        <Link to="/blog" className="text">Blog</Link>
        <Link to="/docs" className="text">Docs</Link>
        <Link to="https://github.com/astro-fi/astrofi/issues" className="text">Issues</Link>
      </div>
      <div>
        <Link to="https://github.com/astro-fi/astrofi/issues" className="text-sub">Issues</Link>
        <Link to="https://github.com/astro-fi/astrofi/pulls" className="text-sub">Pull Requests</Link>
      </div>
    </StyledFooter>
  );
}