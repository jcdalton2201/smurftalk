const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginMermaid);
  eleventyConfig.addPassthroughCopy("app/images");
  eleventyConfig.addPassthroughCopy("app/style");
  eleventyConfig.addPassthroughCopy("app/javascript");
  return {
      dir: {
          input: 'app'
      },
      templateFormats: ["css", "js", "txt","md"],
  }
};