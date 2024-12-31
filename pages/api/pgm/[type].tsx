import { PgmTypes } from "@/utils";
import { getPgm } from "../../../services/pgm";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const type = req.query.type as string;

    if (!(Object.values(PgmTypes).includes(type))) {
        return res.status(404).json({ message: 'Not Found' });
    }
    res.send(await getPgm(type));
}
