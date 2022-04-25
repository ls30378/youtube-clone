import "./ad.scss";
import Brand from "../components/brand/brand";
const Ad = ({ title, description }) => {
  return (
    <div className="app__ad-container">
      <div className="app__ad-onerow">
        <Brand />
        <div className="closebtn"></div>
      </div>
      <h3>{title}</h3>
      <div className="">
        <a className="trybtn" href="#">
          try it free
        </a>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Ad;
