
export const BROKER_URL = 'ws://localhost:8080/ws'

// export const VIBELY_API = "http://192.168.4.173:5173/"
export const VIBELY_API = "http://localhost:8080/api"

export const USER = JSON.parse(localStorage.getItem('user'))

export const TOKEN = USER ? USER.refreshToken : null

export const PROVINCES_API = "https://provinces.open-api.vn/api/?depth=2"

export const GET_IMAGES = ""

export const GET_POST = `${VIBELY_API}/`