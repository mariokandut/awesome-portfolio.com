import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/awesome-portfolio-logo.svg'

const Logo = styled.img`
  margin: 1rem;
  width: 150px;
  @media screen and (min-width: 1024px) {
    width: 200px;
  }
`;

const Header = (props) => {
  const { siteTitle } = props;
  return (
    <header>
      <div>
        <Link to="/">
          <Logo
            alt={`${siteTitle} Logo`}
            src={logo}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
