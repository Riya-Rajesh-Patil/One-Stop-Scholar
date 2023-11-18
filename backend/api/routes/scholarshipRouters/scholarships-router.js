import express from 'express';
import * as scholarshipsController from '../../controllers/scholarshipControllers/scholarships-controller.js';

const Router = express.Router();

// Defining URL patterns for each type of request, GET, POST, PUT, DELETE
// Routing it will call functions in controller
Router.route('/').get(scholarshipsController.getAll);
Router.route('/:id').get(scholarshipsController.getById);
Router.route('/v1/search').get(scholarshipsController.getByQuery);
Router.route('/').post(scholarshipsController.post);
Router.route('/:id').put(scholarshipsController.put);
Router.route('/:id').delete(scholarshipsController.remove);

//Export this file to use in other files
export default Router;
