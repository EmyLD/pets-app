export default (req, res) => {
    const { email } = req.body;

    // Simuler la vérification de l'email dans la "base de données"
    const users = [{ email: 'known@example.com' }];
    const userExists = users.some(user => user.email === email);

    res.status(200).json({ exists: userExists });
};
