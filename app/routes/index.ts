import * as dishesRouter from "./dish";
import { Express } from "express";

interface Routes {
  [key: string]: { router: (app: Express) => void };
}

const routes: Routes = {
  dishesRouter,
};

export { routes };