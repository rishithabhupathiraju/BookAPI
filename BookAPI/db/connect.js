const mongoose = require("mongoose")

function connectDB(){
    mongoose.connect(process.env.MONGO_DB)
    console.log("MONGODB connected successfully...")

}
module.exports = {
    connectDB
}