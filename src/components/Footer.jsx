import React from 'react';
import { FaHeart, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import { FlexDiv, Text } from '../styled';

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  bottom: 0;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  a:hover {
    text-decoration: underline;
    color: var(--primary);
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexDiv>
        <p>
          Help and add more awesome portfolios{' '}
          <a
            href="https://github.com/mariokandut/awesome-portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>Add PR</span>
          </a>
        </p>
      </FlexDiv>
      <FlexDiv>
        <Text small>
          Made with <FaHeart /> by &nbsp;
          <a
            href="https://github.com/mariokandut"
            target="_blank"
            rel="noopener noreferrer"
          >
            awesome developers
          </a>
        </Text>
      </FlexDiv>
    </StyledFooter>
  );
};
