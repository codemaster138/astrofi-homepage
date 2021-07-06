import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import LogoIconLight from "../images/logo-icon-light.svg";
import LogoIconDark from "../images/logo-icon-dark.svg";
import { SmallButton } from "./button";
import { createPortal } from "react-dom";
import { UilTimes, UilBars } from "@iconscout/react-unicons";
import { useForceUpdate } from "../utils/force-update";

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
    display: ${p => (p.theme.name === "dark" ? "initial" : "none")};
  }

  .logo-icon-light {
    height: 30px;
    width: auto;
    display: ${p => (p.theme.name === "light" ? "initial" : "none")};
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

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.background};
  z-index: 1000;

  div {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: column;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.foreground};
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0px 10px;

    &.text {
      padding: 0px 5px;
    }

    &:hover {
      color: ${p => p.theme.primary};
    }
  }

  button {
    color: ${p => p.theme.foreground};
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0px 10px;
    padding-left: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
    width: calc(100% - 20px);
    background: transparent !important;
    border: none;

    &:hover {
      color: ${p => p.theme.primary};
      cursor: pointer;
    }
  }

  @media screen and (min-width: 850px) {
    position: relative;
    width: unset;
    height: unset;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
  }
`;

const StyledClosedNavbar = styled.div`
  button {
    color: ${p => p.theme.foreground};
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0px 10px;
    padding-left: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
    width: calc(100% - 20px);
    background: transparent !important;
    border: none;

    &:hover {
      color: ${p => p.theme.primary};
      cursor: pointer;
    }
  }
`;

const Navbar = ({ children }) => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const forceUpdate = useForceUpdate();
  const shouldShowNavbar = () =>
    showNavbar || (typeof window !== "undefined" && window.innerWidth > 850);

  React.useEffect(() => {
    const listener = e => {
      forceUpdate();
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  });

  return (
    <>
      {shouldShowNavbar() && (typeof window !== "undefined" && window.innerWidth > 850) && (
        <StyledNavbar>{children}</StyledNavbar>
      )}
      {shouldShowNavbar() &&
        (typeof window !== "undefined" && window.innerWidth < 850) &&
        createPortal(
          <StyledNavbar>
            <div>
              <button onClick={() => setShowNavbar(false)}>
                <span>Close</span> <UilTimes size="16" />
              </button>
              {children}
            </div>
          </StyledNavbar>,
          document.body
        )}
      {!shouldShowNavbar() &&(typeof window !== "undefined" && window.innerWidth < 850) && (
        <StyledClosedNavbar>
          <button onClick={() => setShowNavbar(true)}>
            <UilBars size="16" />
          </button>
        </StyledClosedNavbar>
      )}
    </>
  );
};

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <LogoContainer to="/">
        <LogoIconLight className="logo-icon-light" />
        <LogoIconDark className="logo-icon-dark" />
        <span className="separator"></span>
        <h3>{siteTitle}</h3>
      </LogoContainer>
      <Navbar>
        <Link to="/blog" className="text">
          Blog
        </Link>
        <Link to="/rho" className="text">
          $RHO Token
        </Link>
        <Link to="/astrosale" className="text">
          AstroSale
        </Link>
        <SmallButton primary to="/presale">
          Join Presale
        </SmallButton>
      </Navbar>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
