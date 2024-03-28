import { Form } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

const SearchForm = ({ searchWord }) => {
  return (
    <Form className="form">
      <input
        type="search"
        name="name"
        className="form-input"
        placeholder="Search characters..."
        defaultValue={searchWord}
      />
      {/* <button type="submit">search</button> */}
    </Form>
  );
};
export default SearchForm;
