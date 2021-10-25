import styled from 'styled-components';
import { Link } from 'gatsby';

export const Text = styled.p`
  font-size: ${(props) => props.small && `75%`};
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-direction: ${(props) => props.column && `column`};
  align-items: ${(props) => props.center && `center`};
`;

export const TextLink = styled(Link)`
  color: var(--text);
  text-decoration: underline;
  &:hover {
    color: var(--primary);
    text-decoration: none;
  }
`;
