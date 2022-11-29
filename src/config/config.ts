import mongoose from "mongoose";

const connect = () => {
    const url = "mongodb://127.0.0.1:27017/todoDbs";
    mongoose.connect(url)
    .then(() => {
        console.log("db connected..");
    })
    .catch((err) => {
        console.log("Err: ", err);
    })
}
console.log("inside config")

export default connect;
