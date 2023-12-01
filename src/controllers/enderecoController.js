const Usuario = require('../models/Usuario.js');
const Endereco = require('../models/Endereco.js');

module.exports = {
    async index(req, res) {
        try {
            const enderecos = await Endereco.findAll();

            return res.status(200).json(enderecos);
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na requisição`})
        }
    },
    
    async indexById(req, res) {
        try {
            const { usuario_id } = req.params;

            const usuario = await Usuario.findByPk(usuario_id, {
                include: { association: 'enderecos' }
            });

            return res.tatus(200).json(usuario);
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na requisição do usuário`})
        }  
    },
    
    async store(req, res) {
        try {
            const { usuario_id } = req.params;
            const { rua, cidade, cep, estado, endereco_principal } = req.body;

            const usuario = await Usuario.findByPk(usuario_id);

            if (!usuario) {
                return res.status(400).json({ error: 'Usuario não encontrado' });
            }

            const endereco = await Endereco.create({
                rua, 
                cidade, 
                cep, 
                estado, 
                endereco_principal,
                usuario_id,
            });

            return res.status(200).json(endereco);
        } catch (error) {
            res.status(500).json({message: `${error.message} falha ao cadastrar endereço`})
        }
        
        
    },

    async update(req, res) {
        try {
            const { rua, cidade, cep, estado, endereco_principal } = req.body
            const { endereco_id } = req.params
        

            const endereco = Endereco.findByPk(endereco_id);

            if (!endereco) {
                return res.status(400).json({error: 'Endereço não encontrado'})
            }

            await Endereco.update({
                rua, cidade, cep, estado, endereco_principal
            }, {
                where: {
                    id: endereco_id
                }
            });

            return res.tatus(200).json({message: 'Endereço atualizado com sucesso!'})
        } catch (error) {
            res.status(500).json({message: `${error.message} falha ao atualizar endereço`})
        }
        
        
    },

    async delete (req, res) {
        try {
            const { endereco_id } = req.params;

            await Endereco.destroy({
                where: {
                    id: endereco_id
                }
            });

            return res.status(200).json({message: 'Endereço deletado com sucesso!'});
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na exclusão do endereço`})
        }
        
        
    }
};