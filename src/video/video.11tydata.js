const fetch = require("node-fetch");
const site = require("../_data/site");

const apiKey = site.youtube.apiKey;
const channelId = site.youtube.channelId;

module.exports = async function() {
  if(!apiKey) return {}; // disable if no apiKey

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=200`;
  const response = await fetch(url);
  const json = await response.json();
  return {
    videos: json.items,
  };
}