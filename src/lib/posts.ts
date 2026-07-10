import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export async function getAllPosts(): Promise<Post[]> {
    const posts = await getCollection("blog");
    return posts.sort((a, b) =>
        a.data.date < b.data.date ? 1 : a.data.date > b.data.date ? -1 : 0
    );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
    return (await getAllPosts()).find((p) => p.id === slug);
}

export async function getAllTags(): Promise<string[]> {
    const posts = await getAllPosts();
    const tagSet = new Set<string>();
    for (const post of posts) {
        for (const tag of post.data.tags) {
            tagSet.add(tag);
        }
    }
    return Array.from(tagSet).sort();
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
    return (await getAllPosts()).filter((p) => p.data.tags.includes(tag));
}
