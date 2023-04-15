import { HeartFillIconSvg } from '@/components/Icons/HeartFillIconSvg';
import { Dispatch, SetStateAction } from 'react';
import styled, { keyframes } from 'styled-components';
import useSWR from 'swr';
import axios from 'axios';
import { FavListItem } from './FavListItem';
import { CloseSvg } from '../Icons/CloseSvg';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = 'https://api.punkapi.com/v2/beers?ids=';

interface FavListProps {
  setOpenFav: Dispatch<SetStateAction<boolean>>;
  openFav: boolean;
}

export const FavList: React.FC<FavListProps> = ({ setOpenFav, openFav }) => {
  const handleClick = () => {
    setOpenFav(false);
  };
  const storedIds = localStorage.getItem('fav');
  if (storedIds) {
    const params = JSON.parse(storedIds).join('|');
    const { data, error, isLoading } = useSWR(URL + params, fetcher);
    console.log(data);
    return (
      <Wrapper className={openFav ? 'slidein' : ''}>
        <CloseBtn onClick={handleClick}>
          <CloseSvg />
        </CloseBtn>
        <ul>
          {data &&
            data.map(
              (item: {
                name: string;
                image_url: string;
                id: string;
                abv: string;
                ibu: string;
                description: string;
              }) => {
                return (
                  <FavListItem
                    key={item.id}
                    name={item.name}
                    image={item.image_url}
                    id={item.id}
                    abv={item.abv}
                    ibu={item.ibu}
                    description={item.description}
                  />
                );
              }
            )}
        </ul>
      </Wrapper>
    );
  } else {
    return <Wrapper onClick={handleClick}></Wrapper>;
  }
};

const SlideIn = keyframes`
    from {
        left: -100%;
    }
    to {
        left: 0;
    }
`;

const SlideOut = keyframes`
    from {
        left: 0;
    }
    to {
        left: -100%;
    }
`;

const Wrapper = styled.div`
  z-index: 101;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow-y: scroll;
  padding: 10px 10px 30px 10px;
  left: -100%;
  animation: ${SlideOut} 1s ease-in-out;
  &.slidein {
    left: 0;
    animation: ${SlideIn} 1s ease-in-out;
  }
  ${({ theme }) => theme.device.tablet} {
    width: 40%;
    height: 70vh;
    top: 10vh;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

const CloseBtn = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: auto;
  width: max-content;
  font-size: 30px;
`;
