import "./ad.scss";
import Brand from "../components/brand/brand";
const Ad = ({ title, description }) => {
  const handleClick = (event) => {
    event.target.parentElement.parentElement.style = "display:none;";
    console.log((event.target.parentElement.parentElement.hidden = true));
  };
  return (
    <div className="app__ad-container">
      <div className="app__ad-onerow">
        <Brand />
        <div onClick={handleClick} className="closebtn"></div>
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
