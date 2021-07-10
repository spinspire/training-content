const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  // requires opt-in for 0.x
  eleventyConfig.setDataDeepMerge(true);
  return {
    dir: {
      input: "content",
      output: "dist",
    },
    pathPrefix: '/learn',
    markdownTemplateEngine: "njk",
  };
};
