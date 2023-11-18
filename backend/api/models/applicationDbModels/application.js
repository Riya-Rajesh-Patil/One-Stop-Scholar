//Creating a model schema for the application database
//Import mongoose for database
import mongoose from "mongoose";

//Define the structure and parameters of the schema
const schema = new mongoose.Schema({
    studentId: {
        type: String,
        required: 'student id is required'
    },
    scholarshipId: {
        type: String,
        required: 'scholarship id is required'
    },
    sponsorEmail: {
        type: String,
        required: 'sponsor id is required'
    },
    status: {
        type: String,
        required: 'Status is required',
    }
    
}, { versionKey: false });

//Establish database connection using the Url 
const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/applicationDb?retryWrites=true&w=majority');

//Giving name to the database
const applicationModel = nextAuthDb.model('applications', schema);

//Exporting the database model to use it in other files
export default applicationModel;