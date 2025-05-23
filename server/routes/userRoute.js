import express from 'express'
import { create, getAll, getSingleUser, update, deleteUser } from '../controller/userController.js';

const route = express.Router();

route.post("/create",create)
route.get("/getall",getAll)
route.get("/getSingleUser/:id",getSingleUser)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteUser)


export default route;