import styled from 'styled-components';
import { LoupeIconSvg } from '../Icons/LoupeIconSvg';
import { Dispatch, SetStateAction, useState } from 'react';
import { ReloadIconSvg } from '../Icons/ReloadIconSvg';

export const SearchBar: React.FC<{
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchTerm: string;
}> = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    setSearchTerm(inputValue);
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Szukaj"
        />
        <StyledButton type="submit">
          {searchTerm != '' ? (
            <ReloadIconSvg onClick={() => setInputValue('')} />
          ) : (
            <LoupeIconSvg />
          )}
        </StyledButton>
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 90%;
  padding: 2px 30px 2px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  margin: 20px auto 0 auto;
  ${({ theme }) => theme.device.tablet} {
    position: sticky;
    top: 0;
    margin: 70px auto 0 auto;
    width: 40%;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.dark};
  border: none;
  width: 10%;
  font-size: 20px;
  cursor: pointer;
`;

const Label = styled.div`
  width: 100%;
  border-bottom: 3px solid ${({ theme }) => theme.colors.lightGrey};
  ${({ theme }) => theme.device.tablet} {
    /* width: 40%; */
  }
`;
