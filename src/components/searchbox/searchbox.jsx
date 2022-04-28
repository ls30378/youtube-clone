import "./searchbox.scss";
import { useState } from "react";
const SearchBox = () => {
  const [isActive, setActive] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setActive(true);
  };

  const newHandle = (event) => {
    // event.preventDefault();
    setActive(true);
  };
  return (
    <div className={`search__container ${isActive ? "active" : ""}`}>
      <form>
        <div className={`form__input ${isActive ? "active" : ""}`}>
          <span className={isActive ? "active" : ""}>
            <i className="gg-search"></i>
          </span>
          <input
            onMouseLeave={() => setActive(false)}
            onMouseEnter={() => (isClicked ? setActive(true) : "")}
            onClick={handleClick}
            type="text"
            name="Search"
            id="search"
            placeholder="Search"
            className={isActive ? "active" : ""}
          />
        </div>
        <a onClick={newHandle} href="#">
          <i
            onClick={(event) => {
              newHandle();
            }}
            className="gg-search"
          ></i>
        </a>
      </form>
    </div>
  );
};

export default SearchBox;
