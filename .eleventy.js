module.exports = (eleventyConfig) => {
  eleventyConfig.addJavaScriptFunction("engine", () => {
    const pkg = require("@11ty/eleventy/package.json");
    return versionFilter(pkg);
  });

  eleventyConfig.addLiquidShortcode("engine", () => {
    const pkg = require("liquidjs/package.json");
    return versionFilter(pkg);
  });

  eleventyConfig.addNunjucksShortcode("engine", () => {
    const pkg = require("nunjucks/package.json");
    return versionFilter(pkg);
  });


  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};

function versionFilter({name="n/a", version="n/a"}) {
  return [name, version].join("@").trim();
}
