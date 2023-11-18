//Creating a model schema for the users database
//Import mongoose for database
import mongoose, { Schema } from "mongoose";

//Define the structure and parameters of the schema
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: 'email is required'
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    contact: {
        type: Number
    },
    SSN: {
        type: Number
    }
}, { versionKey: false });

//Establish database connection using the Url
const sponsorDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/sponsorDb?retryWrites=true&w=majority');

//Giving name to the database
const sponsorProfileModel = sponsorDb.model('profile', schema);

//Exporting the database model to use it in other files
export default sponsorProfileModel;