const { serve } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const { htmlPlugin } = require("@craftamap/esbuild-plugin-html");

serve(
  {
    port: 1234,
    servedir: 'dist',
  },
  {
    entryPoints: ["./src/script.tsx"],
    outdir: "./dist",
    format: "esm",
    bundle: true,
    minify: true,
    metafile: true,
    splitting: true,
    logLevel: 'info',
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
  }
);
