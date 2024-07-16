// components/UserProfile.js
"use client"
import { useState, useEffect } from 'react';

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
        const response = await fetch('/api/user/bio', {
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
        <div className="p-4 max-w-xl mx-auto">
            {editMode ? (
                <div>
                    <textarea
                        className="w-full p-2 border rounded"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
                        Sauvegarder
                    </button>
                    <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded" onClick={() => setEditMode(false)}>
                        Annuler
                    </button>
                </div>
            ) : (
                <div>
                    <p className="p-2 border rounded">{savedBio || 'Pas de présentation disponible.'}</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setEditMode(true)}>
                        Modifier la présentation
                    </button>
                </div>
            )}
        </div>
    );
}
