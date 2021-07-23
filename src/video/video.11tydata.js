const fetch = require("node-fetch");

const apiKey = "AIzaSyAQCcE2dquCovM9xw_g2-oW74VcAG2i31c";
const channelId = "UCJ4h7utY-IjXKXOUuwmSYXw";

module.exports = async function() {
  // disabled for now because we don't want to make actual YoutTube API calls and exhaust our quota
  return {};

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=200`;
  const response = await fetch(url);
  const json = await response.json();
  return {
    videos: json.items,
  };
}