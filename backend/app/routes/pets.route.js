
const express = require('express');
const router = express.Router();
const petController = require("../controllers/petController");

router.post("/store", petController.store);

router.get('/:id/edit', petController.edit);

router.put('/:id', petController.update);

router.delete('/:id', petController.destroy);

module.exports = router;
