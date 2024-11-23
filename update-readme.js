const fs = require("fs");
const path = require("path");
let readme = fs.readFileSync(
  path.resolve(__dirname, "docs/README.md"),
  "utf8"
);

const minifiedFiles = fs.readdirSync(path.resolve(__dirname, "minified"));

const dict = []; // Create an empty array
dict["echelon.js"] = "Peloton-Echelon bookmarklet";
dict["schwinn_watt.js"] = "Peloton-Schwinn-Watt bookmarklet";
dict["schwinn.js"] = "Peloton-Schwinn bookmarklet";

minifiedFiles.forEach((file) => {
  const minifiedContent = fs.readFileSync(
    path.resolve(__dirname, "minified", file),
    "utf8"
  );
  const regex = new RegExp(`(\\[${dict[file]}\\]\\()(.+)(\\).+)$`, "gm");
  readme = readme.replace(regex, "$1" + minifiedContent + "$3");
});

fs.writeFileSync(path.resolve(__dirname, "docs/README.md"), readme);