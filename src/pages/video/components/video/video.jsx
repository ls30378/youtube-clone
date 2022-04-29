import "./video.scss";
import { useSelector } from "react-redux";
import { selectVideo } from "../../../../redux/video/video.selector";
import { useEffect, useRef, useState } from "react";
import useVideoPlayer from "./useVideo";
const Video = ({ title }) => {
  const video = useSelector(selectVideo);
  const videoRef = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
  } = useVideoPlayer(videoRef);
  console.log(playerState);
  useEffect(() => {
    togglePlay();
  }, []);
  return (
    <div className="videoPage__videoAndDetails">
      <div className="videoPage__firstDetails">
        <div className="divVideo">
          <video
            ref={videoRef}
            src={video.url}
            autoPlay={false}
            onTimeUpdate={handleOnTimeUpdate}
          />
          <div className="video__controllers">
            <div className="all__controllers">
              <div className="progress">
                <div
                  className="current"
                  style={{
                    width: `${playerState.progress}%`,
                  }}
                ></div>
              </div>
              <div className="buttons">
                <div className="left">
                  <i
                    onClick={togglePlay}
                    className={`fa-solid ${
                      playerState.isPlaying ? "fa-pause" : "fa-play"
                    }`}
                  ></i>
                  <i
                    onClick={toggleMute}
                    className={`fa-solid ${
                      playerState.isMuted ? "fa-volume-xmark" : "fa-volume-low"
                    }`}
                  ></i>
                </div>
                <div className="right">
                  <i className="fa-solid fa-gear"></i>
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="videoPage__tagAndTitle">
          <h3 className="tag">#Video{title}</h3>
          <h3 className="videoPage__title">{video.title}</h3>
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
