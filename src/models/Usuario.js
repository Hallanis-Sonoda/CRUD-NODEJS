const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasMany(models.Endereco, { foreignKey: 'usuario_id', as: 'enderecos' });
    }
}

module.exports = Usuario;