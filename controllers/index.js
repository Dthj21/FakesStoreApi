const models = require("../database/models");

const createUser = async (req, res) => {
	try{
		const user = await models.Producto.create(req.body);
		return res.status(201).json({
			user
		});
	}catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getAllUsers = async (req, res) => {
	console.log('getting users');
	try {
		const users = await models.Producto.findAll({
			include: [
			]
		});
		return res.status(200).json({ users });
	}catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	createUser,
	getAllUsers
};
