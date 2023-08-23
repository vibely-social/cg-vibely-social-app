import {Client} from "@stomp/stompjs";
import {BROKER_URL} from "~/app/constants.js";
import {createContext, useContext} from "react";
import {getRefreshToken} from "~/service/accountService.js";
import {useDispatch} from "react-redux";


const StompClientContext = createContext();

export function StompClientContextProvider({children}) {
    const dispatch = useDispatch()
    const accessToken = getRefreshToken()

    const SocketClient = new Client({
        brokerURL: BROKER_URL,
        // connectHeaders: {
        //     Authorization: 'Bearer ' + accessToken
        // },
        // onConnect: (frame) => {
        //     console.log(frame)
        //     SocketClient.subscribe('/users/queue/messages', (message) => {
        //         const messageContent = JSON.parse(message.body);
        //         console.log(messageContent)
        //         dispatch(addNewMessage(messageContent))
        //     })
        // },
        // onStompError: (frame) => {
        //     console.error('Broker reported error: ' + frame.headers['message']);
        //     console.error('Additional details: ' + frame.body);
        // },
        // onWebSocketError: (error) => {
        //     console.error('Error with websocket', error);
        // },
        // onDisconnect: () => {
        //     console.log('Disconnected!')
        // }
    })

    return (
        <StompClientContext.Provider value={SocketClient}>
            {children}
        </StompClientContext.Provider>
    )
}

export function useStompWsClient() {
    return useContext(StompClientContext)
}