//Import the service file to perform operations
import * as userServices from '../../services/nextAuthDbServices/users-services.js';

//Default function to send response
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//Function to send error response if any
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}


// Controller resolves the requests and consumes functions defined in services
//getAll function :- to fetch all the users
export const getAll = async (req, res) => {
    try {
        const allUsers = await userServices.getAll();
        setResponse(allUsers, res);
    } catch (error) {
        setError(error, res);
    }
}

//search function :- to fetch an application by query parameter
export const search = async (req, res) => {
    try {
        const params = req.params;
        const searchByParam = await userServices.search(params);
        setResponse(searchByParam, res);
    } catch (error) {
        setError(error, res);
    }
}

//getByQuery function :- to fetch an application by query parameter
export const getByQuery = async (req, res) => {
    try {
        const query = req.query;
        const searchByQuery = await userServices.getByQuery(query);
        setResponse(searchByQuery, res);
    } catch (error) {
        setError(error, res);
    }
}

//post function :- to add a new application in database
export const post = async (req, res) => {
    try {
        const user = req.body;
        const savedUser = await userServices.save(user);
        setResponse(savedUser, res);
    } catch (error) {
        setError(error, res);
    }
}

//put function :- to update a user in database
export const put = async (req, res) => {
    try {
        const updateParam = req.body;
        const queryParam = req.params;
        const savedUser = await userServices.update(queryParam, updateParam);
        setResponse(savedUser, res);
    } catch (error) {
        setError(error, res);
    }
}

//remove function :- to delete a user in database
export const remove = async (req, res) => {
    try {
        const query = req.params;
        const removedUser = await userServices.remove(query);
        setResponse(removedUser, res);
    } catch (error) {
        setError(error, res)
    }
}