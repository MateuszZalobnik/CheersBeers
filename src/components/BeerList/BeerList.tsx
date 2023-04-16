import styled from 'styled-components';

import { BeerItem } from './BeerItem';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface BeerListProps {
  data: {
    name: string;
    image_url: string;
    id: string;
    abv: string;
    ibu: string;
    description: string;
  }[];
  setSelectedId: Dispatch<SetStateAction<string | null>>;
  setIds: Dispatch<SetStateAction<number[]>>;
  ids: number[];
}

export const BeerList: React.FC<BeerListProps> = ({
  data,
  setSelectedId,
  setIds,
  ids,
}) => {
  useEffect(() => {
    const storedIds = localStorage.getItem('fav');
    if (storedIds) {
      setIds(JSON.parse(storedIds));
    }
  }, []);
  return (
    <Wrapper>
      <Ul>
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
                <BeerItem
                  setSelectedId={setSelectedId}
                  key={item.id}
                  name={item.name}
                  image={item.image_url}
                  id={item.id}
                  abv={item.abv}
                  ibu={item.ibu}
                  description={item.description}
                  setIds={setIds}
                  ids={ids}
                />
              );
            }
          )}
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const Ul = styled.ul`
  display: block;
  ${({ theme }) => theme.device.tablet} {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;  
}
  `;
