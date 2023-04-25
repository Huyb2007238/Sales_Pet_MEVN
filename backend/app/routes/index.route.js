
const siteRouter = require('./site.route');
const petsRouter = require('./pets.route');
const adminRouter = require('./admin.route');
const authRouter = require('./auth.route');

function route(app) {
    app.use('/admin', adminRouter);

    app.use('/auth', authRouter);

    app.use('/pets', petsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
