import {Client, Stomp} from "@stomp/stompjs";
import {BROKER_URL} from "~/app/constants.js";
import {createContext, useContext} from "react";

const StompClientContext = createContext();

export function StompClientContextProvider({children}) {

    const SocketClient = Stomp.over(function () {
        return new WebSocket(BROKER_URL)
    });

    // const SocketClient = new Client()
    // SocketClient.brokerURL = BROKER_URL;

    return (
        <StompClientContext.Provider value={SocketClient}>
            {children}
        </StompClientContext.Provider>
    )
}

export function useStompWsClient() {
    return useContext(StompClientContext)
}