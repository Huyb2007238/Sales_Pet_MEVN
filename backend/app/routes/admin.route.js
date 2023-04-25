
const express = require('express');
const router = express.Router();
const petController = require("../controllers/petController");
const adminController = require("../controllers/adminController");

router.get('/stored/pets', adminController.storedPets);

router.get('/pets/:id/edit', petController.edit);

router.post("/pets/store", petController.store);

module.exports = router;
