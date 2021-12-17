import http from "http";
import { app } from "./app";
import config from "./config/config";

const server = http.createServer(app);
const { port, env } = config.app;
server.listen(port);
server.on("listening", () => {
  console.log(`server on listening ${port}`);
  console.log(`running on environment: ${env}`);
});
export default server;
