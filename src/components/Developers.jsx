import React from 'react';
import styled from 'styled-components';
import { DeveloperCard } from './DeveloperCard';
import useAllDeveloperPortfolios from '../useAllDeveloperPortfolios';

const Wrapper = styled.div``;
const Title = styled.h3``;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Developers = () => {
  const portfolios = useAllDeveloperPortfolios();
  return (
    <Wrapper>
      <Title>All Developers</Title>
      <CardWrapper>
        {portfolios.map(({ node }) => {
          const {
            name,
            portfolioUrl,
            titleImage,
            description,
            tags,
          } = node.frontmatter;
          return (
            <DeveloperCard
              key={node.id}
              portfolioUrl={portfolioUrl}
              name={name}
              titleImage={titleImage.childImageSharp.fixed.src}
              description={description}
              tags={tags}
            />
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
};
