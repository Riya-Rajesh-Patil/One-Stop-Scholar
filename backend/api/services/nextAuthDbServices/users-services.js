//Import the model file to query database
import User from '../../models/nextAuthDbModels/users.js'

// Asynchronous, save all the users with Mongoose (MongoDB)
export const save = async (user) => {
    const newUser = new User(user);
    return newUser.save();
}

// Asynchronous, search all the users with Mongoose (MongoDB)
export const search = async (query) => {
    const params = {...query};
    const users = User.find(params).exec();
    return users;
}

// Asynchronous, get all the users with Mongoose (MongoDB)
export const getAll = async () => {
    const users = User.find().exec();
    return users;
}

// Asynchronous, get all the users usoing parameter with Mongoose (MongoDB)
export const getByQuery = async (query) => {
    const users = User.find(query).exec();
    return users;
}

// Asynchronous, update all the users with Mongoose (MongoDB)
export const update = async (queryParam, updateParam) => {
    const users = User.updateOne(queryParam, updateParam).exec();
    return users;
}

// Asynchronous, remove all the users with Mongoose (MongoDB)
export const remove = async (query) => {
    const deletedUsers = User.deleteOne(query);
    return deletedUsers;
}