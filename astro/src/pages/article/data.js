import data from "./article.11tydata.json";

export default async function() {
  const nodes = data.articles
  // hide if not promoted
  .filter(node => !!node.attributes.promote)
  // hide if case study
  .filter(node => !node.relationships.field_tags.data.find(d => d.id === "0b5233fa-8483-4146-bee1-a09990812db3"))
  .map(node => ({
    title: node.attributes.title,
    nid: node.attributes.drupal_internal__nid,
    alias: node.attributes?.path?.alias ?? `/node/${node.attributes.drupal_internal__nid}`,
    slug: node.attributes?.path?.alias.replace(/^\/article\//, ""),
    body: node.attributes?.body?.processed,
    summary: node.attributes?.body?.summary || node.attributes?.body?.processed,
    field_image: node.relationships?.field_image?.data?.map(image => ({
      id: image.id,
      alt: image.meta?.alt,
      title: image.meta?.title,
    })),
    uid: {
      id: node.relationships?.uid?.data?.id,
    },
    changed: node.attributes.changed,
  }));
  return nodes;
}