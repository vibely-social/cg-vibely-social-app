
export const BROKER_URL = 'ws://localhost:8080/ws'

// export const VIBELY_API = "http://192.168.4.173:5173/"
export const VIBELY_API = "http://localhost:8080/api"

export const USER = JSON.parse(localStorage.getItem('user'))

export const TOKEN = USER ? USER.refreshToken : null

export const PROVINCES_API = "https://provinces.open-api.vn/api/?depth=2"

export const CLIENT_ID = "532640652631-tadeecfp8o33mipvo37n8fdp76vcq0i3.apps.googleusercontent.com"

// export const CLIENT_ID = "216393743423-7ra1hjhhr7feaj6r1737vmge3pti5704.apps.googleusercontent.com"