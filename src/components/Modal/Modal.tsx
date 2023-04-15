import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import axios from 'axios';
import { HeartFillIconSvg } from '../Icons/HeartFillIconSvg';
import { HeartIconSvg } from '../Icons/HeartIconSvg';
import { CloseSvg } from '../Icons/CloseSvg';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = 'https://api.punkapi.com/v2/beers/';

interface ModalProps {
  id: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
  setIds: Dispatch<SetStateAction<number[]>>;
  ids: number[];
}

export const Modal: React.FC<ModalProps> = ({
  id,
  setSelectedId,
  setIds,
  ids,
}) => {
  const addFav = (currentId: number) => {
    const newIds = [...ids, currentId]; // replace with your own array of IDs
    localStorage.setItem('fav', JSON.stringify(newIds));
    setIds(newIds);
  };

  const removeFav = (currentId: number) => {
    const newIds = ids.filter((num) => num !== currentId);
    localStorage.setItem('fav', JSON.stringify(newIds));
    setIds(newIds);
  };
  const handleClick = () => {
    setSelectedId(null);
  };

  if (!id) {
    return null;
  }
  const { data, error, isLoading } = useSWR(URL + id, fetcher);
  return (
    <WrapperBackground>
      {data && (
        <Wrapper>
          <StyledImg src={data[0].image_url} alt={data[0].name} />
          <Container>
            <CloseBtn onClick={handleClick}>
              <CloseSvg />
            </CloseBtn>
            <ContentWrapper>
              <FavBtn>
                {ids.includes(Number(id)) ? (
                  <HeartFillIconSvg onClick={() => removeFav(Number(id))} />
                ) : (
                  <HeartIconSvg onClick={() => addFav(Number(id))} />
                )}
              </FavBtn>
              <div>
                <Name>{data[0].name}</Name>
                <Description>{data[0].description}</Description>
              </div>
              <InnerWrapper>
                <Params>
                  <span className="value">{data[0].abv}%</span>
                  <span>ABV</span>
                </Params>
                <Params>
                  <span className="value">{data[0].ibu}%</span>
                  <span>IBU</span>
                </Params>
              </InnerWrapper>
            </ContentWrapper>
          </Container>
        </Wrapper>
      )}
    </WrapperBackground>
  );
};

const WrapperBackground = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(6, 6, 6, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  padding: 2%;
  width: 90%;
  height: 70vh;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  -webkit-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  ${({ theme }) => theme.device.tablet} {
    width: 70%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;

const ContentWrapper = styled.div`
  height: max-content;
  align-self: end;
  /* background-color: ${({ theme }) => theme.colors.darkGrey}; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  width: 20%;
  object-fit: contain;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Params = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.m};
  .value {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.blue};
  }
  ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
    .value {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

const FavBtn = styled.div`
  margin-left: auto;
  font-size: 40px;
  cursor: pointer;
   ${({ theme }) => theme.device.tablet} {
    font-size: 70px;
  }
`;
const CloseBtn = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: auto;
  width: max-content;
  font-size: 30px;
  ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
  }
`;
