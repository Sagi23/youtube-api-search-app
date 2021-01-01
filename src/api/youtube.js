import axios from "axios";
const KEY = "AIzaSyC6X6ThjNb8x-xxKbmdgiXHg9aw5wv445U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
