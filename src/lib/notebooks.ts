import path from "node:path";
import { promises as fs } from "node:fs";

import type { FileResource } from "@/types/fileResource";

export async function getNotebooks(): Promise<FileResource[]> {
    const notebooksDirectory = path.join(process.cwd(), "public/notebooks");
    const files = await fs.readdir(notebooksDirectory, { recursive: true });

    return files
        .filter((file: string) => file.endsWith("html"))
        .map((file: string) => {
            const pathParts = file.replace(/\\/g, "/").split("/");
            const filename = pathParts[pathParts.length - 1];
            return {
                title: filename.replace(".html", ""),
                link: `/notebooks/${file.replace(/\\/g, "/")}`,
                category: pathParts.length > 1 ? pathParts[0] : "Miscellaneous",
            };
        });
}
