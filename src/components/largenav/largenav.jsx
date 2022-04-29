import "./largenav.scss";

const LargeNav = () => {
  return (
    <div className="largenav__container">
      <div className="largenav__icons">
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </li>
          <li>
            <i className="fa-solid fa-compass"></i>
            <p>Explore</p>
          </li>
          <li>
            <i className="fa-solid fa-play"></i>
            <p>Shorts</p>
          </li>
          <li>
            <i className="fa-solid fa-clapperboard"></i>
            <p>Subscriptions</p>
          </li>
          <li>
            <i className="fa-solid fa-compact-disc"></i>
            <p>Library</p>
          </li>
          <li>
            <i className="fa-solid fa-clock-rotate-left"></i>
            <p>History</p>
          </li>
        </ul>
      </div>
      <div className="largenav__links"></div>
    </div>
  );
};

export default LargeNav;
