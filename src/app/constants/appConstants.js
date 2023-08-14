import * as StompJs from "@stomp/stompjs";

export const STOMP_CLIENT = new StompJs.Client({
    // brokerURL: 'ws://192.168.4.197:8080/ws'
    brokerURL: 'ws://192.168.1.78:8080/ws'
});