const EventEmitter = require("events");
const http = require("http");
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});
myEmitter.on("newSale", name => {
  console.log("Costumer name:", name);
});
myEmitter.emit("newSale", "Tudor");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received");
  console.log(req.url);
  res.end("request received");
});

server.listen(3000, () => {
  console.log("waiting for request...");
});
