import express from "express";
import v1Router from "./routers/v1/index.router.js";
import { serverConfig } from "./config/index.js";
import { genericErrorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
app.use("/api/v1", v1Router);

/**
 * Add the error handler middleware
 */
app.use(genericErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${serverConfig.PORT}`);
  console.log("Press Ctrl+C to stop server");
});
