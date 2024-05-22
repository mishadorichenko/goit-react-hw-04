import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';

function SearchBar({ onSearch }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const searchQuery = form.elements.searchQuery.value.trim();

    if (searchQuery === '') {
      toast('Please fill out this field.', {
        style: {
          border: '2px solid black',
          width: '300px',
        },
      });
      return;
    }
    onSearch(searchQuery);
    form.reset();
  };
  return (
    <header className={css.header}>
      <Toaster position="top-center" />
      <form className={css.formSearch} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <IoIosSearch />
        </button>
        <input
          className={css.inpt}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default SearchBar;
