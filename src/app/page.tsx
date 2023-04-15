'use client';
import { BeerList } from '@/components/BeerList/BeerList';
import { SearchBar } from '@/components/SearchBar/SearchBar';

export default function Home() {
  return (
    <main>
      <SearchBar />
      <BeerList />
    </main>
  );
}
