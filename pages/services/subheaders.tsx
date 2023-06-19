import { getRandomInt } from "../utils";

import subheaders from "../data/subheaders.json";

export function getRandomSubheader(): string {
    return subheaders[getRandomInt(subheaders.length)];
}
