import * as StompJs from "@stomp/stompjs";

export const STOMP_CLIENT = new StompJs.Client({
    // brokerURL: 'ws://192.168.4.197:8080/ws'
    brokerURL: 'ws://192.168.1.78:8080/ws'
});
// export const VIBELY_API = "http://192.168.4.197:8080/api"
export const VIBELY_API = "http://192.168.1.78:8080/api"

export const FRIEND_MOCK_API = "https://64c7702c0a25021fde927b0e.mockapi.io/api"

export const USER = JSON.parse(localStorage.getItem('user'))