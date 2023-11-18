import express from "express";
import * as ApplicationController from '../../controllers/applicationController/application-controller.js';

const Router = express.Router();

// Defining URL patterns for each type of request, GET, POST, PUT, DELETE
// Routing it will call functions in controller
Router.route('/').get(ApplicationController.getAll);
Router.route('/v1/search').get(ApplicationController.getByQuery);
Router.route('/').post(ApplicationController.post);
Router.route('/:id').put(ApplicationController.put);

//Export this file to use in other files
export default Router;