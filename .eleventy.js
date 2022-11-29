module.exports = function(eleventyConfig) {

    // Výchozí výstupní složka: _site

    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");

    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");

    // Zkopírovat javascript.js do _site/
    eleventyConfig.addPassthroughCopy("javascript.js");

    // Zkopírovat javascript.js do _site/
    eleventyConfig.addPassthroughCopy("siema.min.js");

return {
// možné formáty šablon
templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

}

};
