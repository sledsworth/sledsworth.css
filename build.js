const fg = require("fast-glob");
const sass = require("sass");
const fs = require("fs");
const CleanCSS = require("clean-css");

async function compileCSS() {
  const entries = await fg("**.(css|scss)");
  let results = [];
  for (const entry of entries) {
    const result = sass.renderSync({
      file: entry,
    });
    const css = result.css.toString();
    const filename = entry.split(".")[0];
    fs.writeFileSync("./dist/" + filename + ".css", css, "utf-8", function (e) {
      console.log("done", e);
    });
    results.push(css);
  }
  return results.join("\n\n");
}

async function build() {
  try {
    if (!fs.existsSync("./dist")) {
      fs.mkdirSync("./dist");
    }

    const css = await compileCSS();
    const min = new CleanCSS({}).minify(css).styles;

    fs.writeFileSync("./dist/index.css", min, "utf-8", function (e) {
      console.log("done", e);
    });
  } catch (e) {
    console.error(e);
  }
}

build();
