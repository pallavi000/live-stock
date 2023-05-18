import { Server } from "socket.io";
const StockSocket = require("stocksocket");

export const config = {
  api: {
    bodyParser: false,
  },
};

const getdate = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const date = hour + ":" + minute + ":" + sec;

  return date;
};

export default async function socket(req, res) {
  let io = res.socket.server.io;

  if (!io) {
    io = new Server(res.socket.server, {
      path: "/api/stock",
      addTrailingSlash: false,
    });

    res.socket.server.io = io;
  }
  io.on("connect", (socket) => {
    console.log("connect");

    StockSocket.addTicker("TSLA", stockPriceChanged);

    function stockPriceChanged(data) {
      console.log(data);
      socket.emit("data", {
        label: data.time,
        data: data.price,
      });
    }
  });
}
