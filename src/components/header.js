import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import LogoIconLight from "../images/logo-icon-light.svg";
import LogoIconDark from "../images/logo-icon-dark.svg";
import { SmallButton } from "./button";

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${p => p.theme.background};
  border-bottom: 1px solid ${p => p.theme.background_shade};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px max(10vw, 20px);
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;

  .logo-icon-dark {
    height: 30px;
    width: auto;
    display: ${p => p.theme.name === 'dark' ? 'initial' : 'none'};
  }

  .logo-icon-light {
    height: 30px;
    width: auto;
    display: ${p => p.theme.name === 'light' ? 'initial' : 'none'};
  }

  .separator {
    margin: 5px 15px;
    display: inline-block;
    width: 1px;
    height: 20px;
    background-color: ${p => p.theme.medium};
  }

  h3 {
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    margin: 0;
    letter-spacing: 1px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    text-decoration: none;
    color: ${p => p.theme.foreground};
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0px 10px;

    &:hover {
      color: ${p => p.theme.primary};
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <LogoContainer to="/">
      <LogoIconLight className="logo-icon-light"/>
      <LogoIconDark className="logo-icon-dark"/>
      <span className="separator"></span>
      <h3>{ siteTitle }</h3>
    </LogoContainer>
    <Navbar>
      <Link to="/blog">Blog</Link>
      <SmallButton primary to="/page-2">Join Presale</SmallButton>
    </Navbar>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
