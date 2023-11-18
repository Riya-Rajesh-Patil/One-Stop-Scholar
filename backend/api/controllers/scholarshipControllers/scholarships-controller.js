//Import the service file to perform operations
import * as scholarshipServices from '../../services/scholarshipServices/scholarship-services.js';

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
//getAll function :- to fetch all the scholarships
export const getAll = async (req, res) => {
    try {
        const allScholarships = await scholarshipServices.getAll();
        setResponse(allScholarships, res);
    } catch (error) {
        setError(error, res);
    }
}

//getById function :- to fetch an scholarship by id query parameter
export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const scholarship = await scholarshipServices.getById(id);
        setResponse(scholarship, res);
    } catch (error) {
        setError(error, res);
    }
}

//getByQuery function :- to fetch an scholarship by query parameter
export const getByQuery = async (req, res) => {
    try {
        const query = req.query;
        const searchByQuery = await scholarshipServices.search(query);
        setResponse(searchByQuery, res);
    } catch (error) {
        setError(error, res);
    }
}

//post function :- to add a new scholarship in database
export const post = async (req, res) => {
    try {
        const scholarship = req.body;
        const savedScholarship = await scholarshipServices.save(scholarship);
        setResponse(savedScholarship, res);
    } catch (error) {
        setError(error, res);
    }
}

//put function :- to update a scholarship in database
export const put = async (req, res) => {
    try {
        const updateParam = req.body;
        const queryParam = req.params;
        const savedScholarship = await scholarshipServices.update(queryParam, updateParam);
        setResponse(savedScholarship, res);
    } catch (error) {
        setError(error, res);
    }
}

//remove function :- to delete a scholarship in database
export const remove = async (req, res) => {
    try {
        const query = req.params;
        const removedScholarship = await scholarshipServices.remove(query);
        setResponse(removedScholarship, res);
    } catch (error) {
        setError(error, res)
    }
}