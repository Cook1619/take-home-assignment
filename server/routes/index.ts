import express from "express";
import { getTodoRoutes } from "./todo";

function getRoutes() {
  // All routes in our Node API are placed on this router
  const router = express.Router();

  // router.use() prefixes our route (i.e. /api/v1/todos)
  router.use("/auth", getTodoRoutes());
  return router;
}

export { getRoutes };
