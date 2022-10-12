import axios from "npm:axios";
import { writeFile } from "https://deno.land/std@0.159.0/node/fs/promises.ts";

const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos");
const thumbnails = data.map((item) => item.thumbnailUrl);
const content = JSON.stringify(thumbnails, undefined, 2);

await writeFile("thumbnails.json", content, "utf8");
