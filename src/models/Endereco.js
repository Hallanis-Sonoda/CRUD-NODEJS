const { Model, DataTypes} = require('sequelize');
const Usuario = require('./Usuario');

class Endereco extends Model {
    static associate(models) {
        Endereco.hasMany(Usuario, {foreignKey: 'usuario_id'});
        Usuario.belongsTo(Endereco, {foreignKey: 'id'});

    }
    static init(connection) {
        super.init({
            rua: DataTypes.STRING,
            cidade: DataTypes.STRING,
            cep: DataTypes.STRING,
            estado: DataTypes.STRING,
            endereco_principal: DataTypes.BOOLEAN,
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    }
}

module.exports = Endereco;