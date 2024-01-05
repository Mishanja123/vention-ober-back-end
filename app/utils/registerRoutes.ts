import { routes } from "../routes";
import { Express } from "express";

export const registerRoutes = (app: Express) => {
  Object.keys(routes).forEach((registry) => {
    const route = routes[registry];

    if (typeof route.router === "function") {
      route.router(app);
    }
  });
};
