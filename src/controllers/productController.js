const fs = require('fs');
const AppError = require('../utils/appError');
// const cloudinary = require('../utils/cloudinary');;
const { Product } = require('../models');

exports.createPost = async (req, res, next) => {
	try {
		const data = { userId: req.user.id };
		const {
			product,
			priceProduct,
			amountProduct,
			typeOfProduct,
			ImageProduct,
		} = req.body;

		if (product && product.trim()) {
			data.product = product;
		}
		if (priceProduct) {
			data.priceProduct = priceProduct;
		}
		if (amountProduct) {
			data.amountProduct = amountProduct;
		}
		if (typeOfProduct) {
			data.typeOfProduct = typeOfProduct;
		}
		if (ImageProduct) {
			data.ImageProduct = ImageProduct;
		}
		const post = await Product.create(data);
		// console.log(Product.findOne);
		res.status(201).json({ post });
	} catch (err) {
		next(err);
	} finally {
		if (req.file) {
			fs.unlinkSync(req.file.path);
		}
	}
};

exports.editPost = async (req, res, next) => {
	try {
		const data = { userId: req.user.id };
		const { id } = req.params;
		const {
			product,
			priceProduct,
			amountProduct,
			typeOfProduct,
			ImageProduct,
		} = req.body;

		if (product && product.trim()) {
			data.product = product;
		}
		if (priceProduct) {
			data.priceProduct = priceProduct;
		}
		if (amountProduct) {
			data.amountProduct = amountProduct;
		}
		if (typeOfProduct) {
			data.typeOfProduct = typeOfProduct;
		}
		if (ImageProduct) {
			data.ImageProduct = ImageProduct;
		}

		const post = await Product.update(data, { where: { id } });
		// console.log(productId);
		// console.log(Product.findOne);
		res.status(201).json({ post });
	} catch (err) {
		next(err);
	} finally {
		if (req.file) {
			fs.unlinkSync(req.file.path);
		}
	}
};

exports.deletePost = async (req, res, next) => {
	try {
		const { id } = req.params;
		const post = await Product.destroy({ where: { id } });
		console.log(post);
		// console.log(Product.findOne);
		res.status(201).json({ post });
	} catch (err) {
		next(err);
	} finally {
		if (req.file) {
			fs.unlinkSync(req.file.path);
		}
	}
};

exports.getAllProduct = async (req, res, next) => {
	try {
		const post = await Product.findAll();
		res.status(201).json({ post });
	} catch (err) {
		next(err);
	}
};

exports.getProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const post = await Product.findOne({ where: { id } });
		res.status(201).json({ post });
	} catch (err) {
		next(err);
	}
};
