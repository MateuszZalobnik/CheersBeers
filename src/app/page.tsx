'use client';
import { BeerList } from '@/components/BeerList/BeerList';
import { FavList } from '@/components/FavList/FavList';
import { FavListBtn } from '@/components/FavList/FavListBtn/FavListBtn';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Modal } from '@/components/Modal/Modal';

interface DataType {
  name: string;
  image_url: string;
  id: string;
  abv: string;
  ibu: string;
  description: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const URL = 'https://api.punkapi.com/v2/beers?';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ids, setIds] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openFav, setOpenFav] = useState(false);
  const [firstOpenFav, setFirstOpenFav] = useState(false);
  const [curData, setData] = useState<DataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, searchTerm]);

  const fetchData = async () => {
    let params = '';
    if (searchTerm != '') {
      params = `beer_name=${searchTerm}`;
    } else {
      params = `page=${currentPage}&per_page=80`;
    }
    const response = await fetch(URL + params);
    const jsonData = await response.json();
    if (searchTerm != '') {
      setData(jsonData);
    } else {
      setData((prev) => [...prev, ...jsonData]);
    }
  };

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
        setData={setData}
      />
      {curData.length == 0 ? (
        <LoadingInfo>Ładowanie...</LoadingInfo>
      ) : (
        <BeerList
          data={curData}
          setSelectedId={setSelectedId}
          setIds={setIds}
          ids={ids}
        />
      )}
      {searchTerm != '' ? null : (
        <UploadBtn onClick={() => handlePaginationClick(currentPage + 1)}>
          Więcej...
        </UploadBtn>
      )}
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  position: relative;
  padding-bottom: 50px;
`;

const UploadBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.l};
  border: none;
  text-align: center;
  margin: 20px auto;
  display: flex;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;

const LoadingInfo = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin: 20px auto;
`;
