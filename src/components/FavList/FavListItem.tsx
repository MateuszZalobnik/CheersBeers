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
}

export const FavListItem: React.FC<BeerItemProps> = ({
  name,
  image,
  ibu,
  abv,
  id,
  description,
}) => {
  const truncatedDescription = truncateText(description, 20);
 
//   const removeFav = (currentId: number) => {
//     const newIds = ids.filter((num) => num !== currentId);
//     localStorage.setItem('fav', JSON.stringify(newIds));
//     setIds(newIds);
//   };

  return (
    <Wrapper>
      {/* <StyledImg src={image} alt={name} /> */}
      {/* <Image src={image} alt={name} width={100} height={400} /> */}
      <ContentWrapper>
        <FavBtn>
            {/* <HeartFillIconSvg onClick={() => removeFav(Number(id))} /> */}
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
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  margin-top: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  padding: 2%;
  -webkit-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
`;

const ContentWrapper = styled.div`
  height: max-content;
  align-self: end;
  width: 100%;
  margin-left: 20px;
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
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
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
