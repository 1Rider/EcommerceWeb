const mongoose = require("mongoose")
const connectionState = mongoose.connection.readyState;

const mongodbUrl = process.env.VITE_MONGO_URI

const connectDb = () => {
	return mongoose.connect(mongodbUrl);
}
module.exports = { connectDb };