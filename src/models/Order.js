module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define(
		'Order',
		{
			nameOrder: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
		},
		{ underscored: true }
	);
	Order.associate = (db) => {
		Order.hasMany(db.Slip, {
			foreignKey: {
				name: 'OrderId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
		Order.belongsTo(db.User, {
			foreignKey: {
				name: 'userId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
		Order.belongsTo(db.Product, {
			foreignKey: {
				name: 'ProductId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
	};

	return Order;
};
