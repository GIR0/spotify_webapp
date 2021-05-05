import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "./credentials";

export const userloggedin = () => {
  return false;
};

export const makeLoginUrl = () => {
  var URL = "https://accounts.spotify.com/authorize";
  URL += "?" + "client_id=" + CLIENT_ID;
  URL += "&response_type=code";
  URL += "&" + "redirect_uri=" + REDIRECT_URI;
  URL += "&" + "scope=" + "user-top-read";
  return URL;
};

export async function getTokens(code) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  };
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    requestOptions
  );
  const data = await response.json();
  return data;
}
