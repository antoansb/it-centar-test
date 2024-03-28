import Character from '../components/Character';

const CharacterList = ({ characters }) => {
  if (!characters) {
    return <h2>No characters found...</h2>;
  }

  const characterList = characters.map((character) => {
    const { id, image, name, species } = character;
    const origin = character.origin.name;
    const location = character.location.name;

    // console.log(id, image, name, species, origin, location);

    return {
      id: id,
      image: image,
      name: name,
      species: species,
      origin: origin,
      location: location,
    };
  });

  return (
    <div className="container">
      <h2>Characters</h2>
      <div className="character-list">
        {characterList.map((char) => {
          return <Character key={char.id} {...char} />;
        })}
      </div>
    </div>
  );
};
export default CharacterList;
