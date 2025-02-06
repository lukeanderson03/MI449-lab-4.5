
// The export statement makes these settings available to other files in 11ty
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");


  eleventyConfig.addShortcode("planet-cards", function (group, name, astroUnit) {
    return `<div class="${group}">
    <div id="${name}"></div>
    <h2>${name}</h2>
    <h3>${astroUnit}</h3>
    </div>`
  })
};