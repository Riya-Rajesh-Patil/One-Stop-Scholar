//Creating a model schema for the users database
//Import mongoose for database
import mongoose, { Schema } from "mongoose";

//Define the structure and parameters of the schema
const schema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    gender: {
        type: String
    },
    currentCity: {
        type: String
    },
    currentCountry: {
        type: String
    },
    highestQualification: {
        type: String
    },
    majors: {
        type: String
    },
    grade: {
        type: String
    },
    university: {
        type: String
    },
    yearOfCompletion: {
        type: Number
    },
    company: {
        type: String
    },
    companyLocation: {
        type: String
    },
    position: {
        type: String
    },
    duration: {
        type: Number
    }
}, { versionKey: false });

//Establish database connection using the Url
const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/studentDb?retryWrites=true&w=majority');

//Giving name to the database
const studentProfileModel = nextAuthDb.model('profile', schema);

//Exporting the database model to use it in other files
export default studentProfileModel;