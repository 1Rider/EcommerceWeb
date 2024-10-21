const mongoose = require("mongoose")
const mongodbUrl = "mongodb+srv://nageshwararpit:CsntvHgTjXgxqs0O@cluster0.mtt7o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () => {
	return mongoose.connect(mongodbUrl);
}
module.exports = { connectDb };