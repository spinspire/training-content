const fetch = require("node-fetch");
const site = require("./site");

module.exports = async function () {
  let url = site.articles;
  const articles = [];
  while (url) {
    const response = await fetch(url);
    const json = await response.json();
    // filter out invalid nodes
    const valid_nodes = json.data.filter(node => !!node?.attributes?.path?.alias);
    articles.push(...valid_nodes);
    url = json?.links?.next?.href;
  }
  articles.reverse();
  return articles;
}