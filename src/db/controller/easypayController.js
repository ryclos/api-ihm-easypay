const OsbCommercant = require('../models/easypayModel.js');

const getAllOsbCommercant = async (req, res) => {
    try {
        const osbCommercant = await OsbCommercant.findAll();
        console.log(osbCommercant);
        if (osbCommercant === null) {
            return res.status(400).json(osbCommercant)
        }
        res.status(200).json(osbCommercant);
    } catch (error) {
        res.status(500).json(error)
    }
};

//const addNewOsbCommercant = async (req, res) =>{
//    try {
//        const body = req.body;
//        const osbCommercant = await OsbCommercant.create(body);
//        res.status(201).json(osbCommercant);
//    } catch (error) {
//        res.status(500).json({error});
//    }
//};

//const deleteOsbCommercantById = async (req, res) => {
//    try {
//        const id = req.params.id
//        const osbCommercant = await OsbCommercant.findByPk(id)
//        if (osbCommercant === null) {
//            const message = `Le commerçant n°${id} n'existe pas. Veuillez mettre le bon Numéro Tahiti`
//            return res.status(404).json({message})
//        }
//        await osbCommercant.destroy(id)
//        res.status(204)
//    } catch (error) {
//        res.status(500).json(error)
//    }
//}

const getOsbCommercantById = async (req, res) => {
    try {
        const id = req.params.id;
        const osbCommercant = await OsbCommercant.findByPk(id);
        if (osbCommercant === null) {
            const message = `Le Numero Tahiti ${id} demandé n'existe pas. Réessayer avec un autre.`
            return res.status(404).json({message})
        }
        res.status(200).json(osbCommercant)
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateOsbCommercant = async (req, res) => {
    try {
        const id = req.params.id
        const osbCommercant = await OsbCommercant.findByPk(id); // Récupérer le osbCommercant avant de le modifier
        if (osbCommercant === null) {
            const message = `Le Numero Tahiti ${id} demandé n'existe pas. Réessayer avec un autre.`
            return res.status(404).json({message})
        }
        const { email, logo, idBoutiquePzn, certificat, libelleSMS } = req.body // On récupère les champs de la table qu'on veut modifier
        const updateChamps = { email, logo, idBoutiquePzn, certificat, libelleSMS } // Déclaration des objets sur les champs de la table
        const updateOsbCommercant = await osbCommercant.update(updateChamps); // Une fois récupéré on peut le modifier
        res.status(200).json(updateOsbCommercant)
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllOsbCommercant,
    //addNewOsbCommercant,
    getOsbCommercantById,
    updateOsbCommercant,
    //deleteOsbCommercantById
};