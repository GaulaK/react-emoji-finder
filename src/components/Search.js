const Search = ({ search, handleSearchChange }) => {
  return (
    <header>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        placeholder="What emoji are you looking for ?"
        value={search}
        onChange={handleSearchChange}
        name={search}
      ></input>
    </header>
  );
};

export default Search;
