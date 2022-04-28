import Comments from "./components/comments/comments";
import Video from "./components/video/video";
import UserDetail from "./user-detail/user-detail";
import "./video.scss";

const VideoPage = () => {
  return (
    <div className="videoPage__container">
      <div>
        <Video />
        <UserDetail />
      </div>
      <Comments />
    </div>
  );
};

export default VideoPage;
