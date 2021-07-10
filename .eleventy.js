const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  // requires opt-in for 0.x
  eleventyConfig.setDataDeepMerge(true);
  // copy as-is to output
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addCollection("untagged", function (collection) {
    const all = collection.getAll();
    const untagged = all.filter(page => page.data.tags === undefined);
    return untagged;
  });

  return {
    dir: {
      input: "content",
      output: "dist",
    },
    pathPrefix: '/learn',
    markdownTemplateEngine: "njk",
  };
};
