import mongoose from "mongoose";
import {MONGODB_URI} from "./config"
//import { connect } from "mongoose";conecta directamente el servidor

(async () => {
  try {
    /* conecta con la base de datos y me debuelve un objeto*/
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB conected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
