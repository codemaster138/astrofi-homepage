import { Link } from "gatsby";
import styled from "styled-components";

const Button = styled(Link)`
  text-decoration: none;
  background: ${p => p.primary ? p.theme.primary : 'transparent'};
  color: ${p => p.primary ? p.theme.primary_contrast : p.theme.foreground} !important;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 15px 30px;
  border-radius: 5px;
  display: inline-block;
`;

export const SmallButton = styled(Link)`
  text-decoration: none;
  background: ${p => p.primary ? p.theme.primary : 'transparent'};
  color: ${p => p.primary ? p.theme.primary_contrast : p.theme.foreground} !important;
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px 25px;
  border-radius: 5px;
  display: inline-block;

  * {
    color: ${p => p.primary ? p.theme.primary_contrast : p.theme.foreground} !important;
  }
`;

export default Button;
