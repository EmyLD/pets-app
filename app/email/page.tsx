import { MailVerif } from "./emailCheck";

export default function EmailVerifPage() {
    return (
        <div>
            <h1 className="flex justify-center pt-48 ">Vérification de votre adresse mail</h1>
            <MailVerif /> {/* On affiche le formulaire ici */}
        </div>
    );
}