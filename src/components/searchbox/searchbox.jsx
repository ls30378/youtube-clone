import "./searchbox.scss";

const SearchBox = () => {
  return (
    <div className="search__container">
      <form>
        <input type="text" name="Search" id="search" placeholder="Search" />
        <input type="button" value="Search" alt="Search" />
      </form>
    </div>
  );
};

export default SearchBox;
