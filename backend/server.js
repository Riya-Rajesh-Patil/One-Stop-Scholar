import app from './api/app.js';

const port = 8080;

// To make the backend application listen to port 8080
// app.listen takes two input parameters, port and callback function
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});