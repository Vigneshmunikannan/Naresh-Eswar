import React, { useEffect, useState } from "react";

export default function SocialMedia() {
  const apiKey = "AIzaSyAwAWK6lp6xh6Uv4BPQUY3zyDCxx_WUm_g";
  const channelId = "UCZCAN1oHu0j6nNVUvLppX6Q";
  const maxResults = 6; // Number of recent videos to display
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); // New state to store the error

  useEffect(() => {
    try {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=id&order=date&maxResults=${maxResults}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const videoItems = data.items.filter(
            (item) => item.id.kind === "youtube#video"
          );
          const videoElements = videoItems.map((item) => {
            const videoId = item.id.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            const videoThumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;

            return (
              <div className="video flex items-center justify-center" key={videoId}>
                <a href={videoUrl} target="_blank">
                  <img src={videoThumbnail} alt="Video Thumbnail" />
                </a>
              </div>
            );
          });

          setVideos(videoElements);
        })
        .catch((error) => {
          setError(error.message);
        });
    } catch (error) {
      setError(error.message);
    }
  }, []);
  
  return (
    <div id="youtube" className="p-5 flex flex-col gap-y-4 min-h-screen pt-10 bg-color-social md:pl-10 md:pr-10">
      <p className="text-center logo text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl sm:pt-8 md:text-center">
        Social Media Update
      </p>
      <p className="subfont text-center text-4xl">Youtube</p>
      <div
        id="videos"
        className="md:mx-4 lg:mx-8 xl:mx-12 grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 gap-10 items-center"
      >
        {error ? (
          <div>
            <p>Server Error Please try again later or visit us on </p>
          <a href="https://www.youtube.com/@ExplorewithNareshPapri/videos" className="text-5xl">Youtube</a>
            </div>
        ) : (
          videos
        )}
      </div>
    </div>
  );
}