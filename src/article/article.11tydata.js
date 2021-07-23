const fetch = require("node-fetch");

module.exports = async function () {
  let url = "https://spinspire.com/jsonapi/node/article";
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