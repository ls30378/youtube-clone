import "./brand.scss";
import { useNavigate } from "react-router-dom";

const Brand = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="brand__container">
      <div className="brand__logo">
        <i className=" fa-brands fa-youtube"></i>
      </div>
      <h2 className="brand__name">YouTube</h2>
    </div>
  );
};

export default Brand;
