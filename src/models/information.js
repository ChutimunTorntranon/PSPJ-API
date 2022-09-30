module.exports = (sequelize, DataTypes) => {
	const information = sequelize.define(
		'information',
		{
			address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			district: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			zipCode: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
		},
		{ underscored: true }
	);
	information.associate = (db) => {
		information.belongsTo(db.User, {
			foreignKey: {
				name: 'UserId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
	};

	return information;
};
