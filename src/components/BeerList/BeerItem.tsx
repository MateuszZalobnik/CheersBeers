import styled from 'styled-components';
import { HeartFillIconSvg } from '../Icons/HeartFillIconSvg';
import { HeartIconSvg } from '../Icons/HeartIconSvg';
import { Dispatch, SetStateAction } from 'react';

interface BeerItemProps {
  name: string;
  image: string;
  abv: string;
  ibu: string;
  id: string;
  description: string;
  setIds: Dispatch<SetStateAction<number[]>>;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
  ids: number[];
}

export const BeerItem: React.FC<BeerItemProps> = ({
  name,
  image,
  ibu,
  abv,
  id,
  description,
  setIds,
  ids,
  setSelectedId,
}) => {
  const truncatedDescription = truncateText(description, 20);
  const addFav = (currentId: number) => {
    const newIds = [...ids, currentId];
    localStorage.setItem('fav', JSON.stringify(newIds));
    setIds(newIds);
  };

  const removeFav = (currentId: number) => {
    const newIds = ids.filter((num) => num !== currentId);
    localStorage.setItem('fav', JSON.stringify(newIds));
    setIds(newIds);
  };

  return (
    <Wrapper>
      <StyledImg src={image} alt={name} />
      <Container>
        <ReadMoreBtn onClick={() => setSelectedId(id)}>
          Czytaj więcej...
        </ReadMoreBtn>
        <ContentWrapper>
          <FavBtn>
            {ids.includes(Number(id)) ? (
              <HeartFillIconSvg onClick={() => removeFav(Number(id))} />
            ) : (
              <HeartIconSvg onClick={() => addFav(Number(id))} />
            )}
          </FavBtn>
          <div>
            <Name>{name}</Name>
            <Description>{truncatedDescription}</Description>
          </div>
          <InnerWrapper>
            <Params>
              <span className="value">{abv}%</span>
              <span>ABV</span>
            </Params>
            <Params>
              <span className="value">{ibu}%</span>
              <span>IBU</span>
            </Params>
          </InnerWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

function truncateText(text: string, maxWords: number) {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  } else {
    return text;
  }
}

const Wrapper = styled.li`
  display: flex;
  margin-top: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  padding: 2%;
  -webkit-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
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
    font-size: ${({ theme }) => theme.fontSize.m};
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
`;
const ReadMoreBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.blue};
  width: max-content;
  margin-left: auto;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;
