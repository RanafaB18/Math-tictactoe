import { io } from "socket.io-client";

// const URL = 'http://localhost:3000'
const URL = 'https://math-tictactoe-backend-production.up.railway.app/'
export const socket = io(URL, {
    autoConnect: false
})
