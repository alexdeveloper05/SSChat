import { API } from '@env'

const url = `https://${API}/api`

export const api = {
    
    // Users
    registerUser: `${url}/users/registeruser`,
    checkUsers: `${url}/users/checkuser`,
    checkToken: `${url}/users/checktoken`,

    // Chats
    newChat: `${url}/chats/newchat`,
    getChats: `${url}/chats/getchats`,

    // WebSocket
    websocket: `wss://${API}`
}