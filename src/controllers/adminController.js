const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const AppError = require('../utils/appError');
const { User } = require('../models');

const genToken = (payload) =>
	jwt.sign(payload, process.env.JWT_SECRET_KEY || 'private_key', {
		expiresIn: process.env.JWT_EXPIRES || '30d',
	});

exports.login = async (req, res, next) => {
	try {
		const { emailOrMobile = 'admin@gmail.com', password = 'qwerty' } = req.body;

		if (typeof emailOrMobile !== 'string' || typeof password !== 'string') {
			throw new AppError('email address or mobile or password is invalid', 400);
		}

		const admin = await User.findOne({
			where: {
				[Op.or]: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
			},
		});

		if (!admin.Admin) {
			throw new AppError('you not admin', 400);
		}

		const isCorrect = await bcrypt.compare(password, admin.password);
		if (!isCorrect) {
			throw new AppError('email address or mobile or password is invalid', 400);
		}

		const token = genToken({ id: admin.id });

		res.status(200).json({ token, admin, message: 'Welcome Admin' });
	} catch (err) {
		next(err);
	}
};
