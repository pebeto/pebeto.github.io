import path from "path";
import { promises as fs } from "fs";

import { FileResource } from "../types/fileResource";

export async function getNotebooks(): Promise<FileResource[]> {
    const notebooksDirectory = path.join(process.cwd(), "public/notebooks");
    const filenames = await fs.readdir(notebooksDirectory);

    return filenames.map((filename: string) => {
        return {
            title: filename.split(".")[0],
            link: `notebooks/${filename}`,
        };
    });
}
