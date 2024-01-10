import * as dishesRouter from "./dish";
import * as usersRouter from "./users";
import { Express } from "express";

interface Routes {
  [key: string]: { router: (app: Express) => void };
}

const routes: Routes = {
  dishesRouter,
  usersRouter,
};

export { routes };
