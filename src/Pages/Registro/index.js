app.post("/registro", (req, res) => {
  //ENCRIPTAMOS CONTRASEÑA
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);
  knex("users")
    .insert({
      name: req.body.nombre,
      email: req.body.email,
      password: hash,
    })
    .then((result) => {
      return res.json({ success: true });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "Ha ocurrido un error",
      });
    });
});
