import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {albumRouter} from "./routes/albumRouter";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/album", albumRouter);

app.listen(process.env.PORT, () => {
console.log("Node server started running " + process.env.PORT);

});