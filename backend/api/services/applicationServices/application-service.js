//Import the model file to query database
import Application from '../../models/applicationDbModels/application.js'

// Asynchronous, get all the tasks with Mongoose (MongoDB)
export const getAll = async () => {
    const application = Application.find().exec();
    return application;
}

// Asynchronous, search the task with Mongoose (MongoDB)
export const search = async (query) => {
    const application = Application.find(query).exec();
    return application;
}


// Asynchronous, save a new task with Mongoose (MongoDB)
export const save = (data) => {
    const application = new Application(data);
    // Send some info to the browser
    return application.save();
}

// Asynchronous, update the task with Mongoose (MongoDB)
export const update = async (queryParam, updateParam) => {
    const application = Application.updateOne(queryParam, updateParam).exec();
    return application;
}