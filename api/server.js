import express from 'express';
import errorHandler from './middleware/errorHandler';
import config from './config/config';
import path from 'path';

let app = express();

require('./middleware/appMiddleware')(app); //setup app middlewares
// app.use(require("./mock/mockServer"));
app.use(require('./controllers/router'));   //setup app routers
app.use(errorHandler);                      //setup error handler

app.listen(config.port, console.log("Server listening on port ", config.port));

if (config.env == config.prod) {
    app.use(express.static(path.resolve(__dirname, '../build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    })
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`URL: ${process.env.API_URL}`);
    console.log(`Port: ${process.env.PORT}`);
    console.log(`MongoDB URL: ${process.env.MONGODB_URL}`);
}