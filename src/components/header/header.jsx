import "./header.scss";
import Brand from "../brand/brand";
import SearchBox from "../searchbox/searchbox";
import SignInButton from "../signinbtn/signinbtn";

const Header = ({ setActive }) => {
  const handleClick = () => {
    setActive(true);
  };
  return (
    <div className="header">
      <div className="header__navAndBrand">
        <div onClick={handleClick} className="header__nav">
          <div className="header__nav--menu"></div>
        </div>
        <Brand></Brand>
      </div>
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
