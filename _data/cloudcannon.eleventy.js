module.exports = function (eleventyConfig) {
    return {
      pathPrefix: '/',
      dir: {
        input: '.',
        data: '_my-custom-data',
        layouts: '_layouts',
        includes: '_my-includes'
      },
      markdownItOptions: {
        html: true
      },
      _enabled_editors:['visual','content']
    };
  };