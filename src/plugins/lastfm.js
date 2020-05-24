import axios from "axios";

const BASE_URL = "https://ws.audioscrobbler.com/2.0/";
const API_KEY = "c2797e2442ddb38a50280e1e697fa316";

const lastfm = {
  chart: {
    getTopArtist: (page = 1) =>
      axios.get(
        `${BASE_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json&page=${page}`
      ),
    getTopTracks: (page = 1) =>
      axios.get(
        `${BASE_URL}?method=chart.getTopTracks&api_key=${API_KEY}&format=json&page=${page}`
      ),
    getArtistTopAlbums: (page = 1, artist = "") =>
      axios.get(
        `${BASE_URL}?method=artist.getTopAlbums&api_key=${API_KEY}&format=json&page=${page}&artist=${artist}`
      ),
    getArtistTopTracks: (page = 1, artist = "") =>
      axios.get(
        `${BASE_URL}?method=artist.getTopTracks&api_key=${API_KEY}&format=json&page=${page}&artist=${artist}`
      ),
    getAlbumInfo: (page = 1, artist = "", album = "") =>
      axios.get(
        `${BASE_URL}?method=album.getInfo&api_key=${API_KEY}&format=json&page=${page}&artist=${artist}&album=${album}`
      ),
    getArtistInfo: (artist = "") =>
      axios.get(
        `${BASE_URL}?method=artist.getInfo&api_key=${API_KEY}&format=json&artist=${artist}`
      )
  }
};

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$lastfm", { value: lastfm });
  }
};
