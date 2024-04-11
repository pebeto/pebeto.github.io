import path from "path";

import { FileResource } from "../types/fileResource";

export async function getNotebooks(readFunction: Function): Promise<FileResource[]> {
    const notebooksDirectory = path.join(process.cwd(), "public/notebooks");
    const filenames = await readFunction(notebooksDirectory);

    return filenames.map((filename: string) => {
        return {
            title: filename.split(".")[0],
            link: `notebooks/${filename}`,
        };
    });
}
