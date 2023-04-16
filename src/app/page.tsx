'use client';
import { BeerList } from '@/components/BeerList/BeerList';
import { FavList } from '@/components/FavList/FavList';
import { FavListBtn } from '@/components/FavList/FavListBtn/FavListBtn';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';
import { Modal } from '@/components/Modal/Modal';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = 'https://api.punkapi.com/v2/beers?';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ids, setIds] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openFav, setOpenFav] = useState(false);
  const [firstOpenFav, setFirstOpenFav] = useState(false);
  let params = '';
  if (searchTerm != '') {
    params = `beer_name=${searchTerm}`;
  } else {
    params = ``;
  }
  const { data, error, isLoading } = useSWR(URL + params, fetcher);
  return (
    <MainWrapper>
      <Modal
        id={selectedId}
        setSelectedId={setSelectedId}
        setIds={setIds}
        ids={ids}
      />
      <FavListBtn setOpenFav={setOpenFav} setFirstOpenFav={setFirstOpenFav} />
      {firstOpenFav && (
        <FavList
          setOpenFav={setOpenFav}
          openFav={openFav}
          setIds={setIds}
          ids={ids}
          setSelectedId={setSelectedId}
        />
      )}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BeerList
        data={data}
        setSelectedId={setSelectedId}
        setIds={setIds}
        ids={ids}
      />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  position: relative;
  padding-bottom: 50px;
`;
