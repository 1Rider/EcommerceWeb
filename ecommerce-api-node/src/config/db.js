const mongoose = require("mongoose")
const mongodbUrl = process.env.VITE_MONGO_URI

const connectDb = () => {
	return mongoose.connect(mongodbUrl);
}
module.exports = { connectDb };