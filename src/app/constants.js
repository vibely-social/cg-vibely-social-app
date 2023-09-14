import { getAccessToken } from "~/service/accountService"

// const hostnameLocal = 'localhost:8080'
const hostnameLocal = '192.168.4.47:8080'
const hostnameProduction = '20.11.80.252:8080'

export const BROKER_URL = `ws://${hostnameProduction}/ws`

export const VIBELY_API = `http://${hostnameProduction}/api`

export const PROVINCES_API = "https://provinces.open-api.vn/api/?depth=2"

export const CLIENT_ID = "532640652631-tadeecfp8o33mipvo37n8fdp76vcq0i3.apps.googleusercontent.com"

export const GOOGLE_USER_INFO_API = "https://www.googleapis.com/oauth2/v2/userinfo"


