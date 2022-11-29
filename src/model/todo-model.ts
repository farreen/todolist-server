import mongoose, {Schema} from "mongoose";

type todoType = {
    todoName: string;
}
const todoSchema: Schema = new mongoose.Schema({
    todoName: {type: String, require: true}
});
console.log("inside todo-model-2");

export default mongoose.model<todoType>("Todo", todoSchema)

