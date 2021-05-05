export async function getArtists(token, limit = 10) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const endpt = "https://api.spotify.com/v1/me/top/artists";
  var URL = endpt;
  URL += "?" + "limit=" + limit;
  const response = await fetch(URL, requestOptions);
  const data = await response.json();
  const result = await data.items.map((item) => {
    const res = {
      id: item.id,
      name: item.name,
      url: item.external_urls.spotify,
      followers: item.followers.total,
      image: item.images[1].url,
    };
    return res;
  });
  return result;
}

export async function getTracks(token, limit = 10) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const endpt = "https://api.spotify.com/v1/me/top/tracks";
  var URL = endpt;
  URL += "?" + "limit=" + limit;
  URL += "&" + "time_range=" + "long_term";
  const response = await fetch(URL, requestOptions);
  const data = await response.json();
  const result = await data.items.map((item) => {
    const res = {
      id: item.id,
      name: item.name,
      artists: item.artists.map((a) => a.name).join(", "),
      url: item.external_urls.spotify,
      image: item.album.images[2].url,
    };
    return res;
  });
  return result;
}
