import { Link } from 'react-router-dom';

const Character = ({ id, image, name, species, origin, location }) => {
  return (
    <div className="character">
      <div className="character-container">
        <Link to={`/character/${id}`}>
          <img src={image} alt="character-image" className="character-image" />
        </Link>
        <div className="character-profile">
          {/* <Link to={`/character/${id}`}> */}
          <h3>{name}</h3>
          {/* </Link> */}
          <div className="characteristics">
            <p className="characteristic">
              Species
              <p className="characteristic-data">{species}</p>
            </p>
            <p className="characteristic">
              Origin
              <p className="characteristic-data">{origin}</p>
            </p>
            <p className="characteristic">
              Location
              <p className="characteristic-data">{location}</p>
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Character;
