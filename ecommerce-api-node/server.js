require('dotenv').config();
const app = require("./src");
const { connectDb } = require("./src/config/db");

const PORT = process.env.PORT || 5454;

app.listen(PORT, async () => {
	await connectDb();
	console.log("ecommerce api listening on port : ", PORT);
})