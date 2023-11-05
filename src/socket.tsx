import { io } from "socket.io-client";

// const URL = 'http://localhost:3000'
const URL = 'https://math-tictactoe-backend.railway.internal'
export const socket = io(URL, {
    autoConnect: false
})
