/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { getTheme } from "./themes";

import Header from "./header";
import Footer from "./footer";
import "./index.css";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${p => p.theme.background};

  * {
    color: ${p => p.theme.foreground};
  }
`;

const Content = styled.main`
  width: 100vw;
  height: calc(100vh - 60px);
  position: fixed;
  left: 0;
  top: 60px;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={getTheme('dark')}>
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title || `AstroFi`} />
        <Content>
          { children }
          <Footer/>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
