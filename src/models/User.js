module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			email: {
				type: DataTypes.STRING,
				unique: true,

				validate: {
					isEmail: true,
				},
			},
			mobile: {
				type: DataTypes.STRING,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					len: [6, 100],
				},
			},
		},
		{ underscored: true }
	);
	User.associate = (db) => {
		User.hasMany(db.information, {
			foreignKey: {
				name: 'userId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});

		User.hasMany(db.Cart, {
			foreignKey: {
				name: 'userId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
		User.hasMany(db.Order, {
			foreignKey: {
				name: 'userId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
		User.hasMany(db.Slip, {
			foreignKey: {
				name: 'userId',
				allowNull: false,
			},
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		});
	};
	return User;
};
