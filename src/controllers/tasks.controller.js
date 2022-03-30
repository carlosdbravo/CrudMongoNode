import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean(); //devuelve los atributos de cada objeto
  //console.log(tasks);
  res.render("index", { tasks: tasks }); //mostramos en index una lista de las tareas creadas
};

export const createTask = async (req, res) => {
  // res.send("saved");
  // const taskSaved = await task.save();
  try {
    const task = Task(req.body/*este es todo el objeto del modelo*/);//*se pasa todo el objeto del modelo a task
    await task.save();
  } catch (error) {
    console.log(error);
  }

  res.redirect("/");
  // console.log(taskSaved);
};

export const renderTaskEdit = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const editTask = async (req, res) => {
    // console.log(req.body);
    // console.log(req.params.id);s
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  };
  export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/"); 
  };
  export const toggleDone = async (req,res)=>{
    const {id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    //console.log(task);
    res.redirect("/"); 
    };