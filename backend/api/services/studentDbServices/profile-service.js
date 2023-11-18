//Import the model file to query database
import Profile from '../../models/studentDbModels/profile.js';

// Asynchronous, save the student with Mongoose (MongoDB)
export const save = async (data) => {
    const profile = new Profile(data);
    return profile.save();
}

// Asynchronous, search the student with Mongoose (MongoDB)
export const search = async (query) => {
    // const params = {...query};
    const profile = await Profile.find(query).exec();
    return profile;
}

// Asynchronous, update the student with Mongoose (MongoDB)
export const update = async (queryParam, updateParam) => {
    const profile = Profile.updateOne(queryParam, updateParam).exec();
    return profile;
}

// Asynchronous, delete the student with Mongoose (MongoDB)
export const remove = async (query) => {
    const deletedProfile = Profile.deleteOne(query);
    return deletedProfile;
}