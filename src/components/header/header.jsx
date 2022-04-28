import "./header.scss";
import Brand from "../brand/brand";
import SearchBox from "../searchbox/searchbox";
import SignInButton from "../signinbtn/signinbtn";
import { selectIsMobileSearchVisible } from "../../redux/mobile-search/mobile.selector";
import { showMobileSearch } from "../../redux/mobile-search/mobile.actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Header = ({ setActive }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectIsMobileSearchVisible);
  const handleClick = () => {
    setActive(true);
  };
  return (
    <div className="header">
      <div className="header__navAndBrand">
        <div onClick={handleClick} className="header__nav">
          <div className="header__nav--menu">
            <span></span>
          </div>
        </div>
        <Brand></Brand>
      </div>
      {/* BUTON PER ME PARAQIT SEARCH NE MOBILE */}
      <i
        onClick={() => dispatch(showMobileSearch())}
        className="fa-solid fa-magnifying-glass"
      ></i>
      <div className="header__searchAndIcons">
        <SearchBox></SearchBox>
        <div className="header__searchAndIcons--icons">
          <i className="header__mic">
            <span className="gg-mic"></span>
          </i>
          <i className="header__menuGrid">
            <span className="gg-menu-grid-o"></span>
          </i>
        </div>
      </div>
      <SignInButton />
    </div>
  );
};

export default Header;
