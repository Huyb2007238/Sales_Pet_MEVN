
const Pet = require('../models/pet');
const { multipleMongooseToObject } = require('../utils/mongoose');
const { mongooseToObject } = require('../utils/mongoose');


class adminController {
    // [GET] /admin/stored/pets
    storedPets(req, res, next) {
        Pet.find({})
            .then(pets => {
                res.send({ pets: multipleMongooseToObject(pets) })
            })
            .catch(next);
    }
}

module.exports = new adminController;
