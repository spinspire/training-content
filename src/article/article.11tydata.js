const fetch = require("node-fetch");
const site = require("../_data/site");

module.exports = async function () {
  let url = site.articles;
  const articles = [];
  while (url) {
    const response = await fetch(url);
    const json = await response.json();
    articles.push(...json.data);
    url = json.links.next;
  }
  articles.reverse();
  return {
    articles,
  };
}