import subheaders from "../data/subheaders.json";

export function getRandomSubheader(): string {
  const randomInt = Math.floor(Math.random() * Math.floor(subheaders.length));
  return subheaders[randomInt];
}
