//Import the model file to query database
import Scholarship from '../../models/scholarshipDataDbModels/scholarships.js'

// Asynchronous, get all the scholarships with Mongoose (MongoDB)
export const getAll = async () => {
    const scholarships = Scholarship.find().exec();
    return scholarships;
}

// Asynchronous, search all the scholarships with Mongoose (MongoDB)
export const search = async (query) => {
    const scholarship = Scholarship.find(query).exec();
    return scholarship;
}

// Asynchronous, get all the scholarships with Mongoose (MongoDB)
export const getById = (id) => {
    const scholarship = Scholarship.findById(id).exec();
    return scholarship;
}

// Asynchronous, save all the scholarships with Mongoose (MongoDB)
export const save = (data) => {
    const scholarship = new Scholarship(data);
    return scholarship.save();
}

// Asynchronous, update all the scholarships with Mongoose (MongoDB)
export const update = async (queryParam, updateParam) => {
    const scholarship = Scholarship.updateOne(queryParam, updateParam).exec();
    return scholarship;
}

// Asynchronous, delete all the scholarships with Mongoose (MongoDB)
export const remove = async (query) => {
    const deletedScholarship = Scholarship.deleteOne(query);
    return deletedScholarship;
}