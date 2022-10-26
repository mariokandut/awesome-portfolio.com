import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import error404 from '../assets/error-404.svg';
import { FlexDiv, TextLink } from '../styled';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-height: 50vh;
`;

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <FlexDiv column center>
      <StyledImg src={error404} />
      <TextLink to={'/'}>Go back</TextLink>
    </FlexDiv>
  </Layout>
);

export default NotFoundPage;
