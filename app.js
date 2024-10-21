const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const PORT = 5000

//Liocal Middleware
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//Library Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(express.json());

//Routes
app.use('api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//Initiate server
const serverInit = async () => {
    try {
        await connectDB();
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is listening on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

serverInit();