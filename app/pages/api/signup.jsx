export default (req, res) => {
    const { email, password, username } = req.body;

    // Simuler l'ajout de l'utilisateur à la "base de données"
    console.log('Nouvel utilisateur:', { email, password, username });

    res.status(200).json({ success: true });
};
