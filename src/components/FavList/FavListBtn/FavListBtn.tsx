import { HeartFillIconSvg } from '@/components/Icons/HeartFillIconSvg';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface BtnProps {
  setOpenFav: Dispatch<SetStateAction<boolean>>
  setFirstOpenFav: Dispatch<SetStateAction<boolean>>
}

export const FavListBtn:React.FC<BtnProps> = ({setOpenFav, setFirstOpenFav}) => {
  const handleClick = () => {
    setOpenFav(true);
    setFirstOpenFav(true);
  }
  return (
    <Wrapper onClick={handleClick}>
      <HeartFillIconSvg />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  width: 70px;
  z-index: 100;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
  position: fixed;
  bottom: 30px;
  right: 15px;
  display: flex;
  font-size: 50px;
  align-items: center;
  justify-content: center;
`;
