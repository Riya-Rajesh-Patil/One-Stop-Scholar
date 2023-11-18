//Creating a model schema for the users database
//Import mongoose for database
import mongoose from "mongoose";

//Define the structure and parameters of the schema
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: 'email is required'
    },
    name: {
        type: String,
        required: 'name is required'
    },
    image: {
        type: String,
    },
    emailVerified: {
        type: String,
    },
    userType: {
        type: String,
        required: 'userType is required'
    }
}, { versionKey: false });

//Establish database connection using the Url 
const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/nextauthDb?retryWrites=true&w=majority');

//Giving name to the database
const userModel = nextAuthDb.model('users', schema);

//Exporting the database model to use it in other files
export default userModel;