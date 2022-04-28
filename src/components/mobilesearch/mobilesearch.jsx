import "./mobilesearch.scss";
import { selectIsMobileSearchVisible } from "../../redux/mobile-search/mobile.selector";
import { hideMobileSearch } from "../../redux/mobile-search/mobile.actions";
import { useSelector, useDispatch } from "react-redux";

const MobileSearch = () => {
  const isVisible = useSelector(selectIsMobileSearchVisible);
  const dispatch = useDispatch();
  return (
    <div className={`mobile-search__container ${isVisible ? "active" : ""}`}>
      <div onClick={() => dispatch(hideMobileSearch())} className="back">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder="Search..." />
        <a href="" className="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </form>
    </div>
  );
};

export default MobileSearch;
