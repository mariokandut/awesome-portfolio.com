import React, {useState} from 'react';
import styled from 'styled-components';
import { DeveloperCard } from './DeveloperCard';
import useAllDeveloperPortfolios from '../useAllDeveloperPortfolios';
import {SearchBar} from "./SearchBar";

const Wrapper = styled.div``;
const Title = styled.h3``;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Developers = () => {
  const portfolios = useAllDeveloperPortfolios();
  const [filter, setFilter] = useState('');
  return (
    <Wrapper>
      <SearchBar cb={ev => setFilter(ev)}/>
      <Title>All Developers</Title>
      <CardWrapper>
        {portfolios.filter(({node}) => filter.length ? node.frontmatter.name.toLowerCase().includes(filter) || node.frontmatter.tags.indexOf(filter) !== -1 : true).map(({ node }) => {
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
