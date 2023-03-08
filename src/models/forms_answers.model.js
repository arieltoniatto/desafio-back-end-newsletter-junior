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
    },
    {
        timestamps: true,
        tableName: 'forms_answers',
        underscored: true,
    });

    return UserTable;
}

module.exports = SchemaUser;