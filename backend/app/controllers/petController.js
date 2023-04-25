
const Pet = require('../models/pet');
const { multipleMongooseToObject } = require('../utils/mongoose');
const { mongooseToObject } = require('../utils/mongoose');


class petController {

    // [POST] /admin/pets/store
    store(req, res, next) {
        const formData = req.body;
        const pet = new Pet(formData);
        pet.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));
    }

    // [GET] /admin/pets/:id/edit
    edit(req, res, next) {
        Pet.findById(req.params.id)
            .then(pet => {
                res.send(mongooseToObject(pet))
            })
            .catch(next);
    }

    // [PUT] /pets/:id
    update(req, res, next) {
        Pet.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({
                status: 201
            }))
            .catch(() => res.json({
                status: 501
            }));
    }

    // [DELETE] /pets/:id
    destroy(req, res, next) {
        Pet.deleteOne({ _id: req.params.id })
            .then(() => res.send('Delete Successfully!'))
            .catch(() => res.send('Delete Failure!'));
    }
}

module.exports = new petController;
