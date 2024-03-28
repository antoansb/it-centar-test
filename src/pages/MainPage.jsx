import { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const charactersURL = `https://rickandmortyapi.com/api/character/?name=${searchWord}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(charactersURL);
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    const delayFunction = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(delayFunction);
  }, [searchWord]);

  return (
    <>
      <SearchForm searchWord={searchWord} setSearchWord={setSearchWord} />
      <CharacterList characters={characters} />
    </>
  );
};
export default MainPage;
