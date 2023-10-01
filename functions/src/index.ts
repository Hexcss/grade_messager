import * as functions from "firebase-functions";
import * as express from "express";
import * as bodyParser from "body-parser";
import webhookRouter from "./routes/webhook";

const app = express();
app.use(bodyParser.json());

app.use("/", webhookRouter);

exports.api = functions.runWith({ secrets: ['DISCORD_WEBHOOK'] }).https.onRequest(app);
