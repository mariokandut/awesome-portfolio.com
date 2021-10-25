import React from 'react';
import styled from 'styled-components';
import { DeveloperCard } from './DeveloperCard';

const Wrapper = styled.div``;
const Title = styled.h3``;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Developers = () => {
  return (
    <Wrapper>
      <Title>All Developers</Title>
      <CardWrapper>
        <DeveloperCard
          path="loremipsum"
          title="Lorem Ipsum"
          titleImage={require('../assets/markus-spiske-hvSr_CVecVI-unsplash.jpg')}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo finibus, euismod neque euismod, posuere arcu. Ut sed orci in libero ullamcorper lacinia at eget lacus."
          tags={['typescript, react, gatsby']}
        />
      </CardWrapper>
    </Wrapper>
  );
};
