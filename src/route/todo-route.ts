import express from "express";
import controller from "../controller/todo-controller"

const router = express.Router();
console.log("todorouter")
router.post("/create", controller.createTodo);
router.get("/get", controller.readTodo);
router.put("/update", controller.updateTodo);
router.delete("/delete", controller.deleteTodo);

export default router;
