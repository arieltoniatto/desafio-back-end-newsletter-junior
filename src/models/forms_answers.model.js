const SchemaUser = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('FormsAnswers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        phone: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        timestamps: false,
        tableName: 'forms_answers',
        underscored: true,
    });

    return UserTable;
}

module.exports = SchemaUser;