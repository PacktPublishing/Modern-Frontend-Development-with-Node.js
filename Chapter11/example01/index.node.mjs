import axios from 'axios';
import { writeFile } from 'fs/promises';

const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
const thumbnails = data.map(item => item.thumbnailUrl);
const content = JSON.stringify(thumbnails, undefined, 2);

await writeFile('thumbnails.json', content, 'utf8');
