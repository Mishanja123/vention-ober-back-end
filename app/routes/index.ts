import * as dishesRouter from "./dish";
import * as usersRouter from "./users";
import * as cartRouter from "./cart";
import { Express } from "express";

interface Routes {
  [key: string]: { router: (app: Express) => void };
}

const routes: Routes = {
  dishesRouter,
  usersRouter,
  cartRouter,
};

export { routes };
