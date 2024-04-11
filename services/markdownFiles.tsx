import path from "path";
import { promises as fs } from "fs";

import { FileResource } from "../types/fileResource";

export function getMarkdownFilesDirectory(): string {
    return path.join(process.cwd(), "public/markdown");
}

export async function getMarkdownFileNames(): Promise<string[]> {
    const fileNames = await fs.readdir(getMarkdownFilesDirectory());

    return await Promise.all(fileNames);
}

export async function getMarkdownFileContent(fileName: string): Promise<string[]> {
    const data = await fs.readFile(path.join(getMarkdownFilesDirectory(), fileName), "utf8");

    return await Promise.all([data]);
}

export async function getMarkdownFiles(): Promise<FileResource[]> {
    const fileNames = await getMarkdownFileNames();

    const markdownFiles = fileNames.map(async (fileName: string) => {
        const data = (await getMarkdownFileContent(fileName))[0];
        const fileDate = fileName.replace(/\.md$/, '')
        const fileTitle = data.split('\n')[0].replace("#", "").trim();

        return {
            title: `${fileDate} - ${fileTitle}`,
            link: `posts/${fileDate}`,
        };
    });

    return await Promise.all(markdownFiles);
}
