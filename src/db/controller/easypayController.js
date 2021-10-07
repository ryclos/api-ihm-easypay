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

const addNewOsbCommercant = async (req, res) =>{
    try {
        const body = req.body;
        const osbCommercant = await OsbCommercant.create(body);
        res.status(201).json(osbCommercant);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteOsbCommercantById = async (req, res) => {
    try {
        const id = req.params.id
        const osbCommercant = await OsbCommercant.findByPk(id)
        const OsbCommercantDeleted = osbCommercant
        const deleteOsbCommercant = (await osbCommercant).destroy({
            where: {
                id: OsbCommercantDeleted.id
            }
        })
        const message = `Le commerçant avec l'identifiant n°${OsbCommercantDeleted.id} a bien été supprimé.`
        res.json({message, data: OsbCommercantDeleted })
    } catch (error) {
        res.status(500).json(error)
    }
}

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
        const updateOsbCommercant = await osbCommercant.update(req.body); // Une fois récupéré on peut le modifier
        res.status(203).json(updateOsbCommercant)
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllOsbCommercant,
    addNewOsbCommercant,
    getOsbCommercantById,
    updateOsbCommercant,
    deleteOsbCommercantById
};