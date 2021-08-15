const fs = require("fs");

module.exports = function (snowpackConfig, pluginOptions) {
  const { layout } = pluginOptions;
  return {
    name: 'default-layout-plugin',
    async transform(file) {
      if (/\.md$/.test(file.srcPath)) {
        file.contents = `import {__renderPage as __default_layout} from '${layout}';\n`
          + file.contents.replace("layout: typeof __layout === 'undefined' ? undefined : __layout,", "layout: typeof __layout === 'undefined' ? __default_layout : __layout,");
        // file.contents = file.contents.replace("&amp;#123;", "&#123;");
        // console.log("file", file);
        fs.writeFileSync("/tmp/file.js", file.contents);
        return file;
      }
    },
  };
}
