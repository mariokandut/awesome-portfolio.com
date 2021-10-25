import React from 'react';
import { FlexDiv } from '../styled/index';
import styled from 'styled-components';
import { SearchBar } from './SearchBar';

const Wrapper = styled.div`
  text-align: center;
  min-height: 50vh;
`;

const Title = styled.h1`
  color: var(--primary);
`;

const Hero = () => {
  return (
    <Wrapper>
      <FlexDiv column>
        <Title>Hello Developer</Title>
        <p>
          We are building an index for awesome developer portfolios,
          <br />
          as a source for inspiration, information and, as an awesome
          showcase.
          <br />
          <br />
          <i>
            This project is <b>work in progress</b>. Help is more than
            welcome.
          </i>
        </p>
        <SearchBar />
      </FlexDiv>
    </Wrapper>
  );
};

export default Hero;
