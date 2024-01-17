import * as dishesRouter from "./dish";
import * as usersRouter from "./users";
import * as ordersRouter from "./orders";
import * as paymentRouter from "./payment";
import { Express } from "express";

interface Routes {
  [key: string]: { router: (app: Express) => void };
}

const routes: Routes = {
  dishesRouter,
  usersRouter,
  ordersRouter,
  paymentRouter
};

export { routes };
