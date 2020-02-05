import express from "express";
import routes from "./routes";

import "./database";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //Permite que à aplicação receba requisições em formato JSON
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
