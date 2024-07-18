// components/UserProfile.js
"use client"
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pin } from 'lucide-react';
import H3 from './ui/H3';



export default function UserProfile() {
    const [bio, setBio] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [savedBio, setSavedBio] = useState('');

    useEffect(() => {
        // Récupérer la bio sauvegardée à partir de l'API (ou d'une source de données)
        async function fetchBio() {
            const response = await fetch('/api/user/bio');
            const data = await response.json();
            setSavedBio(data.bio);
        }
        fetchBio();
    }, []);

    const handleSave = async () => {
        // Sauvegarder la bio via l'API
        const response = await fetch('./app/api/user/bio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bio }),
        });
        if (response.ok) {
            setSavedBio(bio);
            setEditMode(false);
        }
    };

    return (

        // <div className="p-4 max-w-xl mx-auto grid grid-cols-12">

        //     <div className='col-span-12'>
        //         <div className='flex grid justify-center'>
        //             <Avatar>
        //                 <AvatarImage src="https://github.com/shadcn.png" />
        //                 <AvatarFallback>CN</AvatarFallback>
        //             </Avatar>
        //         </div>
        //         <div className='flex justify-center'>
        //             <button>Editez votre photo de profile</button>
        //         </div>


        //         <div className='col-span-4 '>
        //             Nom: <br /><br />
        //             Email: <br /><br />
        //             Bio: <br /><br />
        //             <br /><br />
        //             <br /><br />
        //             Domicile: <br /><br />
        //             Foyer:<br /><br />
        //             Ville:<br /><br />
        //         </div>


        <div className="p-4  grid grid-cols-12">
            <div className='flex justify-between col-span-12 border-b-2 mb-8 pb-8 border-zinc-200 md:hidden'>
                <button className='border-profil border-secondary border-2 text-secondary p-2'>Mon profil</button>
                <button className='border-2 p-2'><Pin className='-rotate-45' /></button>
                <button className='border-2 p-2'>Favoris</button>
            </div>
            <div className='col-span-12 md:col-span-4'>
                <div className='flex justify-center'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className='flex justify-center'>
                    <button className='pb-8 text-caca'>Editez votre photo de profile</button>
                </div>

                <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                        <div className='pb-8'>Nom:</div>
                        <div className='pb-8'>Email:</div>
                        <div className='pb-8 border-b-2 border-zinc-200'>Bio:</div>
                        <div className='pb-8 pt-8'>Domicile:</div>
                        <div className='pb-8'>Foyer:</div>
                        <div className='pb-8 border-b-2 border-zinc-200'>Ville:</div>
                    </div>
                    <div className='col-span-8'>
                        <div className='pb-8'>Helena Hills</div>
                        <div className='pb-8'>name@domain.com</div>
                        <div className='pb-8 border-b-2 border-zinc-200'>A description of this user.</div>
                        <div className='pb-8 pt-8'>Appartement</div>
                        <div className='pb-8'>Célibataire</div>
                        <div className='pb-8 border-b-2 border-zinc-200'>Bois d'Arcy</div>
                    </div>
                </div>
                <H3 className='pt-8'>
                    Paramètres du compte
                </H3>









                {/* <div>
                    <p className="p-2 border rounded"></p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                        Modifier la présentation
                    </button>
                </div>

                <textarea
                    className="w-full p-2 border rounded"

                />
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
                    Sauvegarder
                </button>
                <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded" onClick={() => setEditMode(false)}>
                    Annuler
                </button> */}
            </div>


        </div >
    );
}
