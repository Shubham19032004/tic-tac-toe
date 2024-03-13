import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(); // Create a Socket.IO server instance
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  console.log(socket.id);
});

const ticTac = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, "efwrw", " a user"));
});

export { ticTac, httpServer }; // Export the httpServer instance for Socket.IO to use
