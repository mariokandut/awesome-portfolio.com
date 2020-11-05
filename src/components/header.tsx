import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <img
        alt={`${siteTitle}-Logo`}
        width="300"
        src={require('../images/logo.svg')}
      />
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
