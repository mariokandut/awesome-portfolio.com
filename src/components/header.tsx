import React from 'react';
import { Link } from 'gatsby';

const Header = (props) => {
  const { siteTitle } = props;
  return (
    <header className="w-full container mx-auto sm:p-6 lg:pl-0 lg:pr-0 lg:pb-6 lg:pt-6">
      <div className="w-full flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        >
          <img
            alt={`${siteTitle} Logo`}
            width="300"
            src={require('../images/logo.svg')}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
