app.post("/login", (req, res) => {
  // consulto si el usuario está registrado
  knex("users")
    .select({
      nombre: "nombre",
      mail: "mail",
      contrasena: "contrasena",
    })
    .where("mail", req.body.mail)
    .then((result) => {
      // comparo password para autenticación
      if (bcrypt.compareSync(req.body.contrasena, result[0].contrasena)) {
        return res.json({
          success: true,
          auth_token: jwt.sign(
            {
              name: result[0].name,
              email: result[0].email,
            },
            process.env.JWT_PRIVATE_KEY
          ),
        });
      }
      return res.json({ success: false });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "Error de autenticación",
      });
    });
});
