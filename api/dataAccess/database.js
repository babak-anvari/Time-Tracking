import config from '../config/config';

const mongoose = require('mongoose');
const databaseURL = config.databaseURL; //ERP is the name of database.

export const connectdb = () => {
  mongoose
    .connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch(err => console.error("Connection error", err));
}

export const disConnectdb = () => {
  mongoose.connection.close()
    .then(() => console.log("Successfully disconnected from MongoDB."));
}