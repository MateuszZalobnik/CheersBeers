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
  width: 90%;
  padding: 2px 30px 2px 30px;
  border-radius: ${({theme}) => theme.borderRadius.m};
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 10px;
  margin: 20px auto 0 auto;
  ${({ theme }) => theme.device.tablet} {
    position: sticky;
    top: 10px;
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

const StyledLoupeIconSvg = styled(LoupeIconSvg)`
  width: 10%;
  font-size: 20px;
`;

const Label = styled.div`
  width: 100%;
  border-bottom: 3px solid ${({ theme }) => theme.colors.lightGrey};
  ${({ theme }) => theme.device.tablet} {
    /* width: 40%; */
  }
`;
