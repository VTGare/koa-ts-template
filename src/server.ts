import * as Koa from "koa";
import * as Router from "koa-router";
import * as json from "koa-json";
import * as bodyparser from "koa-bodyparser";
import * as cors from "@koa/cors"
import * as mongoose from "mongoose";
import { logger } from "./middleware"

const app = new Koa();
const router = new Router();

app.use(json());
app.use(bodyparser());
app.use(cors());
app.use(logger);

router.get("/*", async (ctx) => {
    ctx.body = { ping: "pong" };
});

app.use(router.routes());

app.listen(8080);
console.log("Server's listening of port 8080");