import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;
