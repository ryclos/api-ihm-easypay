const express = require('express');
const router = express.Router();
const controller = require('../db/controller/easypayController');

router.get('/', controller.getAllOsbCommercant);
router.post('/', controller.addNewOsbCommercant);
router.get('/:id', controller.getOsbCommercantById);
router.put('/:id', controller.updateOsbCommercant);
router.delete('/:id', controller.deleteOsbCommercantById)

module.exports = router;