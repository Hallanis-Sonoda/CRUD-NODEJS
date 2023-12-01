const Usuario = require('../models/Usuario.js');

module.exports = {
    async index (req, res) {
        try {
            const usuarios = await Usuario.findAll({include: {association: 'enderecos'}});
            
            return res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na requisição`})
        }
    },

    async store (req, res) {
        try {
            const { nome, sobrenome, email } = req.body;

            const usuario = await Usuario.create({nome, sobrenome, email});

            return res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({message: `${error.message} falha ao cadastrar o usuário`})
        }
    },

    async update (req, res) {
        try {
            const { nome, sobrenome, email } = req.body;
            const { usuario_id } = req.params;

            await Usuario.update({
                nome, sobrenome, email
            }, {
                where: {
                    id: usuario_id
                }
            });

            return res.status(200).json({message: 'Usuário atualizado com sucesso!'});
        } catch (error) {
            res.satus(500).json({message: `${error.message} falha na atualização do usuário`});
        }
        
        
    },

    async delete (req, res) {
        try {
            const { usuario_id } = req.params;

            await Usuario.destroy({
                where: {
                    id: usuario_id
                }, include: {
                    association: 'enderecos'
                }
            });

            return res.status(200).json({message: 'Usuário deletado com sucesso!'});
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na exclusão do usuário`})
        }
        
        
    }
}