import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';

const charactersURL = 'https://rickandmortyapi.com/api/character';

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const searchWord = url.searchParams.get('name') || '';

  const response = await axios.get(`${charactersURL}${searchWord}`);
  return { characters: response.data.results, searchWord };
};

const MainPage = () => {
  const { characters, searchWord } = useLoaderData();
  // console.log(characters);
  return (
    <>
      <SearchForm searchWord={searchWord} />
      <CharacterList characters={characters} />
    </>
  );
};
export default MainPage;
