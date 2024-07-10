import { ProfileForm } from "./login";

export default function LoginPage() {
    return (
        <div>
            <h1 className="flex justify-center pt-6">Enregistrez-vous</h1>
            <ProfileForm /> {/* On affiche le formulaire ici */}
        </div>
    );
}