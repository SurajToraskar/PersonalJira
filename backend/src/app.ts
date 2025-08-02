import express from "express";
import cors from "cors";
import jiraRoute from "./routes/jiraboardRoute";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/jiraboard", jiraRoute);

export default app;
