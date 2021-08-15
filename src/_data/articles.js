const fetch = require("node-fetch");
const fs = require("fs");
const site = require("./site");

const cache_file = "src/article/article.11tydata.json";

module.exports = async function () {
  let url = site.articles;
  const articles = [];
  // Check if cache file exists. If so, return.
  if(fs.existsSync(cache_file)) return articles;
  while (url) {
    const response = await fetch(url);
    const json = await response.json();
    // find the matching entity in "included"
    const find = (id) => json.included.find(entity => entity.id === id);
    // function to return undefined
    const undef = () => undefined
    // filter out invalid nodes
    const nodes = json.data
      // filter out those with no alias
      .filter(node => !!node?.attributes?.path?.alias)
      .map(node => ({
        title: node.attributes.title,
        nid: node.attributes.drupal_internal__nid,
        alias: node.attributes.path.alias,
        slug: node.attributes.path.alias.replace(/^\/article\//, ""),
        body: node.attributes?.body?.processed,
        changed: node.attributes.changed,
        created: node.attributes.created,
        summary: node.attributes?.body?.summary || node.attributes?.body?.processed,
        field_tags: node.relationships?.field_tags?.data?.map(tag => ({
          id: tag.id,
          ...( // find the matching entity in "included" and embed it here
            // map object to a smaller object with subset of props
            // see https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
            ({drupal_internal__tid: tid, name, path :{alias}}) => ({ tid, name, alias })
          )(find(tag.id)?.attributes),
        })),
        field_image: node.relationships?.field_image?.data?.map(image => ({
          id: image.id,
          alt: image.meta?.alt,
          title: image.meta?.title || image.meta?.alt,
          ...(
            ({drupal_internal__fid: fid, uri: {url}}) => ({ url, fid })
          )(find(image.id)?.attributes),
        })),
        uid: (user => ({
          id: user.id,
          ...(
            ({
              attributes: {
                drupal_internal__uid: uid, display_name, name, mail,
                field_bio: {processed: bio} = {},
                path: {alias} = {},
              },
              relationships: {user_picture: {data: {id: picture_id} = {}} = {}} = {}
            }) => ({
              uid, display_name, name, mail, bio, alias,
              picture_url: find(picture_id)?.attributes?.uri?.url,
            })
          )(find(user.id)),
        }))(node.relationships?.uid?.data),
      }));
    nodes.forEach(node => {
      if(!articles.find(a => a.alias === node.alias)) {
        // add to the articles array only if this node is not already in it
        articles.push(node);
      }
    });
    url = json?.links?.next?.href;
  }
  // save to cache
  fs.writeFileSync(cache_file, JSON.stringify({articles}, null, 2));
  return articles;
}