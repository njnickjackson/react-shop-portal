const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 3200;
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("Server is running");
});

// "start": "concurrently \"react-scripts start\" \"json-server --watch src/db.json --port 3001\"",

// let baseUrl = `http://localhost:3001/products`;
