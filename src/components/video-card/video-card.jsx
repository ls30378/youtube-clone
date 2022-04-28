import "./video-card.scss";
import { useNavigate } from "react-router-dom";
import { fetchVideoAction } from "../../redux/video/video.actions";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const VideoCard = ({ id, url, title, user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(fetchVideoAction(id));

    navigate(`video/${id}`);
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
          <video hidden={true} src={url} autoPlay={false} />
        </div>
        <div className="videoCard__time">03:30</div>
      </div>
      <div className="videoCard__title-profile">
        <div className="videoCard__image">{user[0]}</div>
        <div className="videoCard__title">{title}</div>
      </div>
      <div className="videoCard__upload">
        <div className="videoCard__uploader">{user}</div>
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
