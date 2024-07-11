import { EmailCheck } from "../../components/emailCheck";
import { Signup } from "../../components/login";



export default function EmailVerifPage() {
    return (
        <div>
            <h1 className="flex justify-center pt-48 ">Vérification de votre adresse mail</h1>
            <EmailCheck /> {/* On affiche le formulaire ici */}
        </div>
    );
}