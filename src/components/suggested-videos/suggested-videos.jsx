import "./suggested-videos.scss";
import { useSelector } from "react-redux";
import { selectSuggestedVideos } from "../../redux/video/video.selector";
import VideoCard from "../video-card/video-card";
const SuggestedVideos = () => {
  const suggestedVideos = useSelector(selectSuggestedVideos);
  console.log(suggestedVideos);
  return (
    <div className="videos">
      {suggestedVideos.map((video) => (
        <VideoCard
          key={video.id}
          id={video.id}
          title={video.title}
          url={video.url}
          user={video.author}
          img={video.img}
        />
      ))}
    </div>
  );
};

export default SuggestedVideos;
