module.exports = (sequelize, DataTypes) => {
	const Cart = sequelize.define(
		'Cart',
		{
			idProduct: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			nameProduct: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			priceProduct: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
		},
		{ underscored: true }
	);
	Cart.associate = (db) => {
		Cart.hasMany(db.Order, {
			foreignKey: {
				name: 'CartId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
		Cart.belongsTo(db.User, {
			foreignKey: {
				name: 'userId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
		Cart.belongsTo(db.Product, {
			foreignKey: {
				name: 'ProductId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
	};
	return Cart;
};
