module.exports = (sequelize, DataTypes) => {
	const Slip = sequelize.define(
		'Slip',
		{
			nameSlip: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
		},
		{ underscored: true }
	);
	Slip.associate = (db) => {
		Slip.belongsTo(db.User, {
			foreignKey: {
				name: 'UserId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});

		Slip.belongsTo(db.Order, {
			foreignKey: {
				name: 'OrderId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
	};
	return Slip;
};
