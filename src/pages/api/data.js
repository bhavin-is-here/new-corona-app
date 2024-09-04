import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/data/data.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  res.status(200).send(fileContent);
}
