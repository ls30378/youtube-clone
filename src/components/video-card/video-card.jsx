import "./video-card.scss";

const VideoCard = () => {
  const handleHover = (event) => {
    if (event.target.nodeName === "IMG") {
      event.target.nextSibling.hidden = false;
      console.log(event.target.nextSibling);
      //   event.target.nextSibling.paused = false;
      event.target.nextSibling.play();
      event.target.hidden = true;
    }
    console.log(event.target.nodeName === "IMG", event.target.childNodes);
  };
  const handleLeave = (event) => {
    event.target.hidden = true;
    event.target.previousElementSibling.hidden = false;
    event.target.pause();
  };
  return (
    <div className="videoCard__container">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="videoCard__video-container"
      >
        <div className="videoCard__video">
          <img
            hidden={false}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
          />
          <video
            hidden={true}
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            autoPlay={false}
          />
        </div>
        <div className="videoCard__time">03:30</div>
      </div>
      <div className="videoCard__title-profile">
        <div className="videoCard__image">B</div>
        <div className="videoCard__title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </div>
      <div className="videoCard__upload">
        <div className="videoCard__uploader">Lorem, ipsum.</div>
        <div className="videoCard__views">32k views * 1 month ago</div>
      </div>
      <div className="videoCard__buttons">
        <a href="#">Watch Later</a>
        <a href="#">Add to queue</a>
      </div>
    </div>
  );
};

export default VideoCard;
