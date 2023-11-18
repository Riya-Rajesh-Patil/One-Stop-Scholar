//Import the service file to perform operations
import * as profileServices from '../../services/sponsorDbServices/profile-service.js';

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
//search function :- to search all the sponsors data
export const search = async (req, res) => {
    try {
        const params = req.params;
        const searchByParam = await profileServices.search(params);
        setResponse(searchByParam, res);
    } catch (error) {
        setError(error, res);
    }
}

//post function :- to add a new the sponsor data
export const post = async (req, res) => {

    try {
        const profile = req.body;
        const savedProfile = await profileServices.save(profile);
        setResponse(savedProfile, res);
    } catch (error) {
        setError(error, res);
    }
}

//put function :- to update the sponsor profile data
export const put = async (req, res) => {
    try {
        const updateParam = req.body;
        const queryParam = req.params;
        const savedProfile = await profileServices.update(queryParam, updateParam);
        setResponse(savedProfile, res);
    } catch (error) {
        setError(error, res);
    }
}

//remove function :- to delete the sponsor profile data
export const remove = async (req, res) => {
    try {
        const query = req.params;
        const removedProfile = await profileServices.remove(query);
        setResponse(removedProfile, res);
    } catch (error) {
        setError(error, res)
    }
}