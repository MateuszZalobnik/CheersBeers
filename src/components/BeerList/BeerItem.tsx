import styled from 'styled-components';
import Image from 'next/image';

interface BeerItemProps {
  name: string;
  image: string;
  abv: string;
  ibu: string;
  id: string;
  description: string;
}

export const BeerItem: React.FC<BeerItemProps> = ({
  name,
  image,
  ibu,
  abv,
  id,
  description,
}) => {
  const truncatedDescription = truncateText(description, 50);
  return (
    <Wrapper>
      <StyledImg src={image} alt={name} />
      <ContentWrapper>
        {/* <Image src={image} alt={name} width={100} height={400} /> */}
        <Name>{name}</Name>
        <Description>{truncatedDescription}</Description>
        <InnerWrapper>
          <Params>
            {abv}
            ABV
          </Params>
          <Params>
            {ibu}
            IBU
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
  display: flex;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  padding: 2%;
  -webkit-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
  box-shadow: 8px 8px 26px -9px rgba(0, 0, 0, 1);
`;

const ContentWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
`;
