import "./video-card.scss";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ title }) => {
  const navigate = useNavigate();
  const handleHover = (event) => {
    if (event.target.nodeName === "IMG") {
      event.target.nextSibling.hidden = false;
      event.target.nextSibling.play();
      event.target.hidden = true;
    }
  };
  const handleLeave = (event) => {
    event.target.hidden = true;
    event.target.previousElementSibling.hidden = false;
    event.target.pause();
  };
  const goToVideo = () => {
    navigate(`/video/${title}`);
  };
  return (
    <div className="videoCard__container">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="videoCard__video-container"
      >
        <div className="videoCard__video" onClick={goToVideo}>
          <img
            hidden={false}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
          />
          <video
            hidden={true}
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            autoPlay={false}
          />
        </div>
        <div className="videoCard__time">03:30</div>
      </div>
      <div className="videoCard__title-profile">
        <div className="videoCard__image">B</div>
        <div className="videoCard__title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </div>
      <div className="videoCard__upload">
        <div className="videoCard__uploader">Lorem, ipsum.</div>
        <div className="videoCard__views">32k views * 1 month ago</div>
      </div>
      <div className="videoCard__buttons">
        <a href="#">Watch Later</a>
        <a href="#">Add to queue</a>
      </div>
    </div>
  );
};

export default VideoCard;
