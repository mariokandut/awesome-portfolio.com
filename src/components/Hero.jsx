import React from 'react';
import { FlexDiv } from '../styled/index';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
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
      </FlexDiv>
    </Wrapper>
  );
};

export default Hero;
