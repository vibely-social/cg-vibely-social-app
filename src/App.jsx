import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes'
import {useStompWsClient} from "~/components/HOC_SocketClient/index.jsx";
import {useEffect, useRef, useState} from "react";
import {addNewMessage, addUnreadMessage} from "~/features/messeger/index.js";
import {useDispatch} from "react-redux";
import {getRefreshToken, getStoredUserData} from "~/service/accountService.js";
import {Toast} from "primereact/toast";

function App() {
    const dispatch = useDispatch()
    const SocketClient = useStompWsClient()
    const accessToken = getRefreshToken()
    const user = getStoredUserData()
    const toastBottomRight = useRef(null);
    useEffect(() => {

        if (!Notification) {
            console.log('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                console.log(permission)
                const notify = new Notification('Vibely', {
                    icon: "src/assets/img/logo.svg",
                    body: "Hey there! Welcome to Vibely Social!",
                });
            });
        }
    })


    useEffect(() => {
        SocketClient.connectHeaders = {
            Authorization: 'Bearer ' + accessToken
        }
        SocketClient.onConnect = (frame) => {
            console.log(frame)
            SocketClient.subscribe('/users/queue/messages', (message) => {
                const messageContent = JSON.parse(message.body);
                console.log(messageContent)
                if (messageContent && messageContent.sender !== user.email){
                    const notify = new Notification(messageContent.senderName, {
                        icon: "src/assets/img/logo.svg",
                        body: messageContent.content,
                    });
                }
                dispatch(addNewMessage(messageContent))
            })
            SocketClient.subscribe('/users/queue/notify', (message) => {
                const messageContent = message.body;
                console.log(messageContent)
                // showMessage(messageContent,toastBottomRight, 'success')
                dispatch(addUnreadMessage())
            })
        }
        SocketClient.onStompError = (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        }
        SocketClient.onWebSocketError = (error) => {
            console.error('Error with websocket', error);
        }
        SocketClient.onDisconnect = () => {
            console.log('Disconnected!')
        }

        if (!SocketClient.connected) {
            SocketClient.activate()
        }
    }, [])

    const showMessage = (content, ref, severity) => {
        const label = 'You have new message:'

        ref.current.show({severity: severity, summary: content, detail: label, life: 3000});
    };

    return (
        <>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
            <Toast ref={toastBottomRight} position="bottom-right"/>
        </>
    )
}

export default App
