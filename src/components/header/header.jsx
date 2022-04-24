import "./header.scss";
import Brand from "../brand/brand";
import SearchBox from "../searchbox/searchbox";
const Header = () => {
  return (
    <div className="header">
      <div className="header__nav"></div>
      <Brand></Brand>
      <SearchBox></SearchBox>
    </div>
  );
};

export default Header;
