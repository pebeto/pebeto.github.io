import path from "path";
import { promises as fs } from "fs";

import { Notebook } from "../types/notebook";

export async function getNotebooks(): Promise<Notebook[]> {
  const notebooksDirectory = path.join(process.cwd(), "public/notebooks");
  const filenames = await fs.readdir(notebooksDirectory);

  return filenames.map((filename) => {
    return {
      title: filename.split(".")[0],
      link: `notebooks/${filename}`,
    };
  });
}
