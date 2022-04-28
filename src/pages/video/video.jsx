import { useEffect } from "react";
import Comments from "./components/comments/comments";
import Video from "./components/video/video";
import UserDetail from "./user-detail/user-detail";
import "./video.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchVideoAction,
  fetchCommentsAction,
  fetchUserAction,
} from "../../redux/video/video.actions";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const dispatch = useDispatch();
  const { video: title } = useParams();
  useEffect(() => {
    console.log(title);
    dispatch(fetchVideoAction(title));
    dispatch(fetchUserAction(title));
    dispatch(fetchCommentsAction(title));
  }, []);
  return (
    <div className="videoPage__container">
      <div>
        <Video title={title} />
        <UserDetail />
      </div>
      <Comments video={title} />
    </div>
  );
};

export default VideoPage;
