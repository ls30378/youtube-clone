import "./video.scss";
import { useParams } from "react-router-dom";

const Video = () => {
  const { video: title } = useParams();
  return (
    <div className="videoPage__videoAndDetails">
      <div className="videoPage__firstDetails">
        <div className="divVideo">
          <video
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            autoPlay={false}
          />
        </div>
        <div className="videoPage__tagAndTitle">
          <h3 className="tag">#Video{title}</h3>
          <h3 className="videoPage__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            dolore?
          </h3>
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
