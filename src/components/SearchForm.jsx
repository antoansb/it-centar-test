import { Form } from 'react-router-dom';

const SearchForm = ({ searchWord, setSearchWord }) => {
  return (
    <Form className="form">
      <input
        type="search"
        className="form-input"
        placeholder="Search characters..."
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)}
      />
    </Form>
  );
};
export default SearchForm;
