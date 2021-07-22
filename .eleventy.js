const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const slugify = require("slugify");
const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')

const input = "src";
const output = "dist";
const pathPrefix = '/learn';
const assetExts = "png,jpg,jpeg,svg,pdf,css";
const client = "client/public/build";

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("slug", (str) => {
    return slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    });
  });
  eleventyConfig.addPlugin(syntaxHighlight, {
    // see https://github.com/11ty/eleventy-plugin-syntaxhighlight/issues/10
    alwaysWrapLineHighlights: true,
  });
  // shortcode example:
  // eleventyConfig.addShortcode("stcd", (p1) => `<p>ShortCode ${p1}</p>`);
  // requires opt-in for 0.x
  eleventyConfig.setDataDeepMerge(true);
  // copy as-is to output
  const assets = `${input}/**/*.{${assetExts}}`;
  eleventyConfig.addWatchTarget(assets);
  eleventyConfig.addPassthroughCopy(assets);
  // client app
  eleventyConfig.addWatchTarget(client);
  eleventyConfig.addPassthroughCopy({ [client]: "client" });
  eleventyConfig.addCollection("category", function (collection) {
    return collection.getAll()
      // .sort((a, b) => a.weight - b.weight) // didn't work
      .reduce(
        (accum, iter) => ({
          ...accum,
          [iter.data.category]: [
            ...(accum[iter.data.category] || []),
            iter,
          ]
        }), {});
  });

  eleventyConfig.addCollection("videos", function (collection) {
    return collection.getAll()
      .reduce(
        (videos, page) => ({
          ...videos,
          [page.data.ytvid]: page
        }), {});
  });

  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(markdownItAttrs); // see https://dev.to/giulia_chiola/add-html-classes-to-11ty-markdown-content-18ic
  eleventyConfig.setLibrary('md', markdownLib)

  return {
    dir: {
      input,
      output,
    },
    pathPrefix,
    markdownTemplateEngine: "njk",
  };
};
