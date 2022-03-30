import { Router } from "express"; //importamos de espress la funcion router
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/tasks.controller";
//import Task from "../models/Task";
//import req from "express/lib/request";
//import res from "express/lib/response";

const router = Router(); // creamos un objeto router para llamar a las funciones

router.get("/", renderTasks); //llamamos a la funcion dentro de controllers/tasks para renderizarlas tareas

router.post("/tasks/add", createTask); //llamamos a la funcion que esta en controllers/taasks para crear tarea

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/about",(req,res)=>{
  res.render("about");
});
router.get("/delete/:id", deleteTask);
router.get("/toggleDone/:id", toggleDone);
export default router;
