import { Signup } from "../components/login";

export default function LoginPage() {
    return (
        <div>
            <h1 className="flex justify-center pt-6">Enregistrez-vous</h1>
            <Signup /> {/* On affiche le formulaire ici */}
        </div>
    );
}