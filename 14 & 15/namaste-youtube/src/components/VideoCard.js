import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 h-72 hover:shadow-lg rounded-lg">
      <img
        className="rounded-lg h-40"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="mt-2">
        <p className="text-sm font-medium text-black">{title}</p>
        <p className="text-sm font-medium text-gray-900">{channelTitle}</p>
        <p className="text-sm font-medium text-gray-900">
          {statistics.viewCount} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
