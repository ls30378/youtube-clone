import "./user-detail.scss";
import { selectUser, selectVideo } from "../../../redux/video/video.selector";
import { useSelector } from "react-redux";

const UserDetail = () => {
  const video = useSelector(selectVideo);
  const user = useSelector(selectUser);
  const formatSubscribe = () => {
    if (user.subscribers > 999 && user.subscribers < 9999) {
      return `${user.subscribers.toString()[0]}.${
        user.subscribers.toString()[1]
      }K`;
    }
    if (user.subscribers > 9999 && user.subscribers < 99999) {
      return `${user.subscribers.toString().substring(0, 2)}.${
        user.subscribers.toString()[2]
      }K`;
    }
    if (user.subscribers > 99999 && user.subscribers < 999999) {
      return `${user.subscribers.toString().substring(0, 3)}.${
        user.subscribers.toString()[3]
      }K`;
    }
    if (user.subscribers > 999999) return `${user.subscribers.toString()[0]}M`;
  };
  return (
    <div className="user__container">
      {/* FIRST ROW USER DETAIL*/}
      <div className="user__detail">
        <div className="user__detail-info">
          <div className="user__image">B</div>
          <div className="user__info">
            <h3>{user.name}</h3>
            <h4>{formatSubscribe()} subscribers</h4>
          </div>
        </div>
        <div className="subscribe">
          <a href="#">Subscribe</a>
        </div>
      </div>
      {/* END FIRST ROW */}
      <div className="user__video-description">
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default UserDetail;
