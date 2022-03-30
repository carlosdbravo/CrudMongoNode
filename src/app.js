import express from "express";
import {create} from "express-handlebars";
import indexRoutes from "./routes/index.routes.js";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout:'main'
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//midelware
app.use(morgan("dev"));// me dice lo que consulte en la web mediante consola
app.use(express.urlencoded({extended: false}));// añade lo enviado en un archivo json


app.use(indexRoutes);
app.use(express.static(path.join(__dirname, "public")));
export default app;