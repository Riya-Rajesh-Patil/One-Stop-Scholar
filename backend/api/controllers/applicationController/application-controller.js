//Import the service file to perform operations
import * as applicationServices from '../../services/applicationServices/application-service.js';

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
//getAll function :- to fetch all the applications
export const getAll = async (req, res) => {
    try {
        const allApplications = await applicationServices.getAll();
        setResponse(allApplications, res);
    } catch (error) {
        setError(error, res);
    }
}

//getByQuery function :- to fetch an application by query parameter
export const getByQuery = async (req, res) => {
    try {
        const query = req.query;
        const searchByQuery = await applicationServices.search(query);
        setResponse(searchByQuery, res);
    } catch (error) {
        setError(error, res);
    }
}

//post function :- to add a new application in database
export const post = async (req, res) => {
    try {
        const application = req.body;
        const savedAplication = await applicationServices.save(application);
        setResponse(savedAplication, res);
    } catch (error) {
        setError(error, res);
    }
}

//put function :- to update the status of an application
export const put = async (req, res) => {
    try {
        const updateParam = req.body;
        const queryParam = req.params;
        const savedAplication = await applicationServices.update(queryParam, updateParam);
        setResponse(savedAplication, res);
    } catch (error) {
        setError(error, res);
    }
}