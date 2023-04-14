import styled from 'styled-components';
import { LoupeIconSvg } from '../Icons/LoupeIconSvg';

export const SearchBar = () => {
  return (
    <Wrapper>
      <Label>
        <StyledInput placeholder="Szukaj" />
        <StyledLoupeIconSvg />
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  ${({ theme }) => theme.device.tablet} {
    position: sticky;
    top: 10px;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const StyledLoupeIconSvg = styled(LoupeIconSvg)`
  width: 10%;
  font-size: 20px;
`;

const Label = styled.div`
  width: 80%;
  border-bottom: 3px solid ${({ theme }) => theme.colors.lightGrey};
  ${({ theme }) => theme.device.tablet} {
    width: 40%;
  }
`;
