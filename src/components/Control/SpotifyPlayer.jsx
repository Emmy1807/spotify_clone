import React, { useEffect } from "react";

const SpotifyPlayer = ({ accessToken }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Spotify Clone",
        getOAuthToken: (cb) => cb(accessToken),
        volume: 0.5,
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, [accessToken]);

  return <div>Spotify Player</div>;
};

export default SpotifyPlayer;