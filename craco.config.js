const path = require("path");
const {
  compilerOptions: { paths },
} = require("./tsconfig.json");

module.exports = {
  webpack: {
    // Set them your alias in the tsconfig.json
    alias: Object.keys(paths).reduce(
      (all, alias) => ({
        ...all,
        [alias.replace("/*", "")]: path.resolve(
          __dirname,
          "src",
          paths[alias][0].replace("/*", ""),
        ),
      }),
      {},
    ),
  },
};
