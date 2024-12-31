import { NextRequest, NextResponse } from "next/server";

import { PgmTypes } from "@/utils";
import { getPgm } from "@/services/pgm";

export async function GET(_: NextRequest,
    { params }: { params: Promise<{ type: string }> }
) {
    const type = (await params).type;

    if (!(Object.values(PgmTypes).includes(type))) {
        return NextResponse.json({ message: 'Not Found' }, { status: 404 });
    }
    return new NextResponse(await getPgm(type));
}
