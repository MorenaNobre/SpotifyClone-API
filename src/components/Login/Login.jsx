import React from "react";
import { Container } from "./LoginStyles";

export default function Login() {
  const handleClick = () => {
    const clientId = "b4de80d01994470197ff56bf03f36011";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`
  };

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="Spotify black logo"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}
