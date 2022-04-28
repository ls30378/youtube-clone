import "./homepage.scss";
import Ad from "../../ad/ad";
import VideoCard from "../../components/video-card/video-card";
import { useEffect, useState } from "react";
import { selectSuggestedVideos } from "../../redux/video/video.selector";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchVideoAction,
  fetchUserAction,
} from "../../redux/video/video.actions";

const Homepage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const suggestedVideos = useSelector(selectSuggestedVideos);
  useEffect(() => {
    setTitle(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam vitae quidem, a fugit suscipit doloribus explicabo vero molestias?"
    );
    setDescription(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);
  }, []);
  return (
    <div className="homepage">
      <Ad title={title} description={description} />
      <div className="videos">
        {suggestedVideos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            url={video.url}
            user={video.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
