import "./video.scss";
import { useSelector } from "react-redux";
import { selectVideo } from "../../../../redux/video/video.selector";
const Video = ({ title }) => {
  const video = useSelector(selectVideo);

  console.log(video);
  return (
    <div className="videoPage__videoAndDetails">
      <div className="videoPage__firstDetails">
        <div className="divVideo">
          <video controls src={video.url} autoPlay={false} />
        </div>
        <div className="videoPage__tagAndTitle">
          <h3 className="tag">#Video{title}</h3>
          <h3 className="videoPage__title">{video.title}</h3>
        </div>
      </div>
      <div className="videoPage__detailsAndButtons">
        <div className="videoPage__details">2,838,238 views * Apr 13,2022</div>
        <div className="videoPage__buttons">
          <i className="fa-solid fa-thumbs-up"></i>
          <p>18K</p>
          <i className="fa-solid fa-thumbs-down"></i>
          <p>DISLIKE</p>
          <i className="fa-solid fa-share"></i>
          <p>SHARE</p>
          <i className="fa-solid fa-circle-plus"></i>
          <p>SAVE</p>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
};

export default Video;
