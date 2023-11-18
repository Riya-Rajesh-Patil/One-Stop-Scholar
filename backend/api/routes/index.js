import userRouter from './nextAuthDbRouters/users-router.js';
import studentProfileRouter from './studentDbRouters/profile-router.js';
import scholarshipRouter from './scholarshipRouters/scholarships-router.js';
import sponsorProfileRouter from './sponsorDbRouters/profile-router.js';
import applicationRouter from './applicationRouters/application-router.js';

export default (app) => {
    app.use('/nextAuthDb/users', userRouter);
    app.use('/studentDb/profile', studentProfileRouter);  
    app.use('/scholarships', scholarshipRouter);
    app.use('/sponsorDb/profile', sponsorProfileRouter);
    app.use('/applications', applicationRouter);
}
