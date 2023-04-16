import styled from 'styled-components';
import { LoupeIconSvg } from '../Icons/LoupeIconSvg';
import { Dispatch, SetStateAction, useState } from 'react';
import { ReloadIconSvg } from '../Icons/ReloadIconSvg';
interface DataType {
  name: string;
  image_url: string;
  id: string;
  abv: string;
  ibu: string;
  description: string;
}
export const SearchBar: React.FC<{
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<DataType[]>>;
  searchTerm: string;
}> = ({ searchTerm, setSearchTerm, setCurrentPage, setData }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue != '') {
      setSearchTerm(inputValue);
    } else {
      clear();
    }
  };

  const clear = () => {
    setSearchTerm('');
    setInputValue('');
    setCurrentPage(1);
    setData([]);
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
            <ReloadIconSvg onClick={clear} />
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
  border: 3px solid ${({ theme }) => theme.colors.lightGrey};
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
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
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
  ${({ theme }) => theme.device.tablet} {
    /* width: 40%; */
  }
`;
