import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../styled';
import { FaSearch } from 'react-icons/fa';

const IconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
const StyledInput = styled.input`
  border-radius: 1rem;
  border: 0.125rem solid var(--text);
  line-height: 2rem;
  padding: 0.25rem 0.5rem;
  color: var(--gray);
  &:focus {
    color: var(--text);
    outline: none;
    border-color: var(--primary);
    ${IconWrapper} {
      color: var(--primary);
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
  margin: 1rem auto;
`;
const HelperText = styled.span`
  font-size: 75%;
  color: var(--text);
`;
const StyledInputWrapper = styled.div`
  position: relative;
`;



export const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const handleChange = (ev) => {
      const filter = ev.target.value;
      setSearchText(filter);
      props.cb(filter.trim().toLowerCase());
  }
  return (
    <Wrapper>
      <FlexDiv column>
        <StyledInputWrapper>
          <StyledInput
            type="text"
            placeholder="frontend developer"
            value={searchText}
            onChange={handleChange}
          />
          <IconWrapper>
            <FaSearch />
          </IconWrapper>
        </StyledInputWrapper>
        <HelperText>Search by name, technology</HelperText>
      </FlexDiv>
    </Wrapper>
  );
};
