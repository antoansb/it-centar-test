import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const URL = 'https://rickandmortyapi.com/api/character';

export const loader = async () => {
  const response = await axios.get(`${URL}`);
  return { characters: response.data };
};

const MainPage = () => {
  const { characters } = useLoaderData();
  console.log(characters);
  return <h2>MainPage</h2>;
};
export default MainPage;
