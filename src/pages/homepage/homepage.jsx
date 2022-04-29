import "./homepage.scss";
import Ad from "../../ad/ad";
import { useEffect, useState } from "react";
import { selectSuggestedVideos } from "../../redux/video/video.selector";
import { useSelector } from "react-redux";
import SuggestedVideos from "../../components/suggested-videos/suggested-videos";
const Homepage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setTitle(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam vitae quidem, a fugit suscipit doloribus explicabo vero molestias?"
    );
    setDescription(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);
  }, []);
  return (
    <div className="homepage">
      <Ad title={title} description={description} />

      <SuggestedVideos />
    </div>
  );
};

export default Homepage;
