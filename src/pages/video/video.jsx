import { useEffect } from "react";
import Comments from "./components/comments/comments";
import Video from "./components/video/video";
import UserDetail from "./user-detail/user-detail";
import "./video.scss";
import { useDispatch } from "react-redux";
import {
  fetchVideoAction,
  fetchCommentsAction,
  fetchUserAction,
} from "../../redux/video/video.actions";
import { useParams } from "react-router-dom";
import SuggestedVideos from "../../components/suggested-videos/suggested-videos";

const VideoPage = () => {
  const dispatch = useDispatch();
  const { video: title } = useParams();
  useEffect(() => {
    console.log(title);
    dispatch(fetchVideoAction(title));
    dispatch(fetchUserAction(title));
    dispatch(fetchCommentsAction(title));
  }, [dispatch, title]);
  return (
    <div className="videoPage__container">
      <div className="firstVideos">
        <Video title={title} />
        <UserDetail />
        <Comments video={title} />
      </div>
      <div className="secondVideos">
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default VideoPage;
