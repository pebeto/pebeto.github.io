import { PgmTypes } from "@/utils";

export async function getPgm(type: string): Promise<string> {
    if (type === PgmTypes.STEAMDECK) {
        type = PgmTypes.NATIVE;
    }

    const url = `https://raw.githubusercontent.com/pebeto/proton-ge-manager/refs/heads/main/scripts/${type}/proton-ge-manager.sh`;
    const response = await fetch(url);
    return response.text();
}
