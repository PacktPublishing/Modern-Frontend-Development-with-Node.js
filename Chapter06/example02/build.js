const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const { htmlPlugin } = require("@craftamap/esbuild-plugin-html");

build({
  entryPoints: ["./src/script.tsx"],
  outdir: "./dist",
  format: "esm",
  bundle: true,
  minify: true,
  metafile: true,
  splitting: true,
  loader: {
    ".jpg": "file",
    ".webp": "file",
    ".mp3": "file",
    ".mp4": "file",
  },
  plugins: [
    sassPlugin(),
    htmlPlugin({
      files: [
        {
          entryPoints: ["./src/script.tsx"],
          filename: "index.html",
          scriptLoading: "module",
          htmlTemplate: "./src/index.html",
        },
      ],
    }),
  ],
});
