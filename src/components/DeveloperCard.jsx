import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaLink } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ReadMore = styled.p`
  position: absolute;
  bottom: 1rem;
  margin: 0;
  right: 0.5rem;
  color: var(--dark);
  font-size: 1rem;
  line-height: 1;
  border-bottom: 3px solid var(--text);

  &:hover {
    border-bottom: 3px solid var(--primary);
  }
`;
const Wrapper = styled.div`
  width: 300px;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.1);
  transition: 0.4s ease-out;
  overflow: hidden;

  &:hover {
    box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.4);
    ${ReadMore} {
      border-color: var(--primary);
      color: var(--primary);
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0.6rem;
  }
`;
const TitleImage = styled.div`
  height: 150px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem 1rem 0 1rem;
  position: relative;
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  color: var(--text);
  margin-bottom: 0.5rem;
`;
const Description = styled.p`
  font-size: 0.75rem;
  margin: 0;
  line-height: 1.25rem;
`;
const CardFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
}`;
const Tags = styled.p``;
const Tag = styled.span`
  font-size: 0.5rem;
  text-transform: uppercase;
`;

export const DeveloperCard = (props) => {
  const { path, title, titleImage, description, tags } = props;
  return (
    <Link to={path}>
      <Wrapper>
        <TitleImage
          style={{
            backgroundImage: `url(${titleImage})`,
          }}
        />
        <Content>
          <Title>
            {title.length > 40
              ? `${title.substring(0, 40)}...`
              : title}
          </Title>
          <Description>
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </Description>
          <Tags>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <CardFooter>
            <ReadMore>
              <FaLink />
            </ReadMore>
          </CardFooter>
        </Content>
      </Wrapper>
    </Link>
  );
};

DeveloperCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
