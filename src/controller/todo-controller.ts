import express, {Request, Response} from "express";

import TodoModel from "../model/todo-model";

const createTodo = (req: Request, res: Response) => {
    const todoName = req.body.text;
    console.log("body", todoName);

    const newTodo = new TodoModel({todoName})
    console.log("newTodo", newTodo);
    newTodo.save()
    .then(() => res.json("todo added"))
    .catch((err) => res.status(400).send("Err: "+err))
}

const readTodo = (_: Request, res: Response) => {
    TodoModel.find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).send(err))
}

const updateTodo = (req: Request, res: Response) => {
    const {id, text} = req.body.data;
    console.log("body update", req.body.data);
    TodoModel.findByIdAndUpdate(id, {text})
    .then(() => res.status(200).send("updated succesfully"))
    .catch((err) => console.log("err", err));
}

const deleteTodo = (req: Request, res: Response) => {
    const {id} = req.body;
    console.log("ress", req.body)
    TodoModel.findByIdAndDelete(id)
    .then(() => res.status(200).send("deleted succesfully"))
    .catch((err) => res.send(err))
}

export default {createTodo, readTodo, updateTodo, deleteTodo}




