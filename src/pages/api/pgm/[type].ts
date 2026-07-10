import type { APIRoute } from "astro";

import { PgmTypes } from "@/utils";
import { getPgm } from "@/lib/pgm";

// Emits extensionless files at /api/pgm/native, /api/pgm/steamdeck, etc.
// These URLs are consumed by the proton-ge-manager install script, so the
// paths must stay stable.
export function getStaticPaths() {
    return Object.values(PgmTypes).map((type) => ({ params: { type } }));
}

export const GET: APIRoute = async ({ params }) => {
    const type = params.type;

    if (!type || !Object.values(PgmTypes).includes(type)) {
        return new Response(JSON.stringify({ message: "Not Found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(await getPgm(type), {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
};
