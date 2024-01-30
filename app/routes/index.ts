import * as authRouter from "./auth";
import * as dishesRouter from "./dish";
import * as usersRouter from "./users";
import * as ordersRouter from "./orders";
import * as paymentRouter from "./payment";
import * as cartRouter from "./cart";
import * as s3Router from "./s3";

import { Express } from "express";

interface Routes {
  [key: string]: { router: (app: Express) => void };
}

const routes: Routes = {
  authRouter,
  dishesRouter,
  usersRouter,
  ordersRouter,
  cartRouter,
  paymentRouter,
  s3Router,
};

export { routes };
