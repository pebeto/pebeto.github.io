import subheaders from "../data/subheaders.json";

export function getRandomSubheader(): string {
    const randomInt = Math.floor(Math.random() * subheaders.length);
    return subheaders[randomInt];
}
