//Creating a model schema for the scholarships database
//Import mongoose for database
import mongoose from "mongoose";

//Define the structure and parameters of the schema
const schema = new mongoose.Schema({
    scholarshipName: {
        type: String,
        required: 'name is required'
    },
    scholarshipDescription: {
        type: String,
    },
    scholarshipSponsor: {
        type: String,
    },
    scholarshipAmt: {
        type: String
    },
    scholarshipDeadline: {
        type: Date,
    },
    scholarshipCriteria: {
        type: String,
    },
    scholarshipApplicants: {
        type: String,
    },
    sponsorEmail: {
        type: String,
    },
    country: {
        type: String,
    }
}, { versionKey: false });

//Establish database connection using the Url 
const nextAuthDb = mongoose.createConnection('mongodb+srv://onestopscholar:OneStopScholarINFO6150@onestopscholar.cpgxpwf.mongodb.net/scholarshipDb?retryWrites=true&w=majority');

//Giving name to the database
const scholarshipModel = nextAuthDb.model('scholarships', schema);

//Exporting the database model to use it in other files
export default scholarshipModel;