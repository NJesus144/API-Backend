const create = (req, res) => {
  const { name, idade, cidade } = req.body;

  if (!name || !idade || !cidade) {
    res.status(400).send({ message: "submit all fields for registration" });
  }

  res.status(201).send({
    message: "User created successfully",
    user: {
      name,
      idade,
      cidade,
    },
  });
};

module.exports = { create };
