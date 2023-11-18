import express from "express";
import * as ProfileController from '../../controllers/sponsorDbControllers/profile-controller.js';

const Router = express.Router();

// Defining URL patterns for each type of request, GET, POST, PUT, DELETE
// Routing it will call functions in controller
Router.route('/:email').get(ProfileController.search);
Router.route('/').post(ProfileController.post);
Router.route('/:email').put(ProfileController.put);
Router.route('/:email').delete(ProfileController.remove);

//Export this file to use in other files
export default Router;