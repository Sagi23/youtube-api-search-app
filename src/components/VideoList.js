import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelect }) => {
  let lis = videos.map((v) => (
    <VideoItem key={v.id.videoId} video={v} onSelect={onSelect} />
  ));

  return <div className="ui relaxed divided list">{lis}</div>;
};

export default VideoList;
