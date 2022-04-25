import "./searchbox.scss";
import { useState } from "react";
const SearchBox = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
  };
  return (
    <div className="search__container">
      <form>
        <div className="form__input">
          <span className={isActive ? "active" : ""}>
            <i className="gg-search"></i>
          </span>
          <input
            onClick={handleClick}
            type="text"
            name="Search"
            id="search"
            placeholder="Search"
            className={isActive ? "active" : ""}
          />
        </div>
        <a onClick={(event) => event.preventDefault()} href="#">
          <i className="gg-search"></i>
        </a>
      </form>
    </div>
  );
};

export default SearchBox;
