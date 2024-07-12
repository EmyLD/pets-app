import nodemailer from 'nodemailer';

export async function POST(req) {
    const { firstname, lastname, email, userType, text } = await req.json();

    // Déterminer le service d'email à utiliser
    let service;
    if (email.endsWith('@gmail.com')) {
        service = 'gmail';
    } else if (email.endsWith('@yahoo.com')) {
        service = 'yahoo'; // Yahoo nécessite une configuration spécifique
    } else if (email.endsWith('@outlook.com') || email.endsWith('@hotmail.com') || email.endsWith('@hotmail.fr')) {
        service = 'hotmail'; // Hotmail et Outlook
    } else if (email.endsWith('@aol.com')) {
        service = 'aol'; // AOL
    } else if (email.endsWith('@icloud.com')) {
        service = 'icloud'; // iCloud (peut nécessiter des configurations spécifiques)
    } else if (email.endsWith('@zoho.com')) {
        service = 'zoho'; // Zoho Mail
    } else if (email.endsWith('@protonmail.com')) {
        return new Response(JSON.stringify({ error: 'ProtonMail n\'est pas supporté pour l\'envoi d\'emails via SMTP' }), { status: 400 });
    } else if (email.endsWith('@mail.com')) {
        service = 'mail'; // Mail.com
    } else {
        return new Response(JSON.stringify({ error: 'Service email non supporté' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: process.env.EMAIL_USER, // Votre adresse email
            pass: process.env.EMAIL_PASS, // Votre mot de passe ou mot de passe d'application
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // L'adresse email utilisée pour l'envoi
        replyTo: email, // L'adresse email saisie dans le formulaire
        to: 'j.fery@hotmail.fr', // L'adresse où envoyer le message
        subject: 'Nouveau message du formulaire de contact',
        text: `Prénom: ${firstname}\nNom: ${lastname}\nEmail: ${email}\nType d'utilisateur: ${userType}\nMessage: ${text}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email envoyé' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }), { status: 500 });
    }
}
