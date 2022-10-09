module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		'Product',
		{
			product: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			ImageProduct: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			priceProduct: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			amountProduct: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			typeOfProduct: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ underscored: true }
	);
	Product.associate = (db) => {
		Product.hasMany(db.Order, {
			foreignKey: {
				name: 'ProductId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
		Product.belongsTo(db.User, {
			foreignKey: {
				name: 'userId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});

		Product.hasMany(db.Cart, {
			foreignKey: {
				name: 'ProductId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
	};
	return Product;
};
