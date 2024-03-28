import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowBack } from 'react-icons/io';

const characterURL = 'https://rickandmortyapi.com/api/character/';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${characterURL}${id}`);

  return { id, data };
};

const Character = () => {
  const { data } = useLoaderData();
  const { image, name, species, status, gender, episode } = data;
  const origin = data.origin.name;
  const location = data.location.name;

  return (
    <div>
      <div className="header">
        <Link to="/">
          <span>
            <IoIosArrowBack></IoIosArrowBack>
            BACK
          </span>
          <span></span>
        </Link>
        <img
          src={image}
          alt="single-character-image"
          className="single-character-image"
        />
        <h2>{name}</h2>
      </div>
      <div className="character-info">
        <h2>Character info</h2>
        <div className="info">
          <span className="specific-info">
            Species
            <p className="specific-info-data">{species}</p>
          </span>
          <span className="specific-info">
            Origin
            <p className="specific-info-data">{origin}</p>
          </span>
          <span className="specific-info">
            Location
            <p className="specific-info-data">{location}</p>
          </span>
          <span className="specific-info">
            Status
            <p className="specific-info-data">{status}</p>
          </span>
          <span className="specific-info">
            Gender
            <p className="specific-info-data">{gender}</p>
          </span>
        </div>
        <div className="episodes">
          <h2>Episodes</h2>
          {episode.map((episode) => {
            return (
              <p key={episode} className="single-episode">
                {episode}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Character;
