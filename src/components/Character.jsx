import { Link } from 'react-router-dom';

const Character = ({ id, image, name, species, origin, location }) => {
  return (
    <div className="character">
      <div className="character-container">
        <Link to={`/character/${id}`}>
          <img src={image} alt="character-image" className="character-image" />
        </Link>
        <div className="character-profile">
          <h3>{name}</h3>
          <div className="characteristics">
            <span className="characteristic">
              Species
              <p className="characteristic-data">{species}</p>
            </span>
            <span className="characteristic">
              Origin
              <p className="characteristic-data">{origin}</p>
            </span>
            <span className="characteristic">
              Location
              <p className="characteristic-data">{location}</p>
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Character;
