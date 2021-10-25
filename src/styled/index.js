import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => props.small && `75%`};
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-direction: ${(props) => props.column && `column`};
`;
