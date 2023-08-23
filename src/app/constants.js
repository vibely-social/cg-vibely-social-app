import * as StompJs from "@stomp/stompjs";

// export const STOMP_CLIENT = new StompJs.Client({
//     brokerURL: 'ws://192.168.4.197:8080/ws'
// });
export const BROKER_URL = 'ws://192.168.1.78:8080/ws'

// export const VIBELY_API = "http://192.168.4.197:8080/api"
export const VIBELY_API = "http://localhost:8080/api"

export const USER = JSON.parse(localStorage.getItem('user'))

export const TOKEN = USER ? USER.refreshToken : null

export const PROVINCES_API = "https://provinces.open-api.vn/api/?depth=2"