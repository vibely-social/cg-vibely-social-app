
export const BROKER_URL = 'ws://192.168.1.78:8080/ws'

export const VIBELY_API = "http://192.168.4.173:5173/"
// export const VIBELY_API = "http://localhost:8080/api"

export const USER = JSON.parse(localStorage.getItem('user'))

export const TOKEN = USER ? USER.refreshToken : null

export const POST_API = "http://192.168.4.173:8080/api/posts"
// export const POST_API = "http://localhost:8080/api/posts"
export const PROVINCES_API = "https://provinces.open-api.vn/api/?depth=2"
export const GET_IMAGES = ""

export const GET_POST = `${VIBELY_API}/`

export const GET_COMMENT = ""
