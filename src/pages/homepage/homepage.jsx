import "./homepage.scss";
import Ad from "../../ad/ad";
import VideoCard from "../../components/video-card/video-card";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setTitle(
      ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam vitae quidem, a fugit suscipit doloribus explicabo vero molestias?`
    );
  }, []);
  useEffect(() => {
    setDescription(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);
  }, []);

  return (
    <div className="homepage">
      <Ad title={title} description={description} />
      <div className="videos">
        <VideoCard title={"One"} />
        <VideoCard title={"Two"} />
        <VideoCard title={"Three"} />
        <VideoCard title={"Four"} />
      </div>
    </div>
  );
};

export default Homepage;
