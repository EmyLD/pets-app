
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { firstname, lastname, email, userType, text } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // true pour 465, false pour d'autres ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });


    const mailOptions = {
        from: process.env.EMAIL_USER, // Utiliser l'adresse mail de l'expéditeur
        replyTo: email, // Adresse email saisie dans le formulaire pour les réponses
        to: 'j.fery@hotmail.fr',
        subject: 'Nouveau message du formulaire de contact',
        text: `Prénom: ${firstname}\nNom: ${lastname}\nEmail: ${email}\nType d'utilisateur: ${userType}\nMessage: ${text}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email envoyé' }), { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error.message);
        return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }), { status: 500 });
    }
}
