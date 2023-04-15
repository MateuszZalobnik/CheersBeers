import styled from 'styled-components';
import useSWR from 'swr';
import axios from 'axios';
import { BeerItem } from './BeerItem';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = 'https://api.punkapi.com/v2/beers?page=1&per_page=10';

export const BeerList = () => {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log(data);
  return (
    <Wrapper>
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
                <BeerItem
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
};

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
   ${({ theme }) => theme.device.tablet} {
    width: 60%;
  }
`;
