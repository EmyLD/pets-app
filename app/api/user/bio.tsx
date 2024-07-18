// pages/api/user/bio.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    bio: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        // Sauvegarder la bio
        const { bio } = req.body;
        // Vous devriez sauvegarder cette bio dans une base de données réelle ici
        res.status(200).json({ bio });
    } else {
        // Récupérer la bio
        // Vous devriez récupérer cette bio d'une base de données réelle ici
        res.status(200).json({ bio: 'Ceci est une bio sauvegardée.' });
    }
}
