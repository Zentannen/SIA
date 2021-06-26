import React from 'react'
const stormTypes = require('../data/stormTypes')
export default function NotificationsGen({time,title,text,type}){
    async function showNotification(time,title,text,type) {
        const result = await Notification.requestPermission();
        console.log(stormTypes)
        if (result === 'granted') {
            console.log(stormTypes[type])
            const noti = new Notification(`Warning, a type ${type} storm.`, {
                body: `The ${stormTypes[type]['fn']} will arrive ${stormTypes[type].wt===null?'now':('at'+time)}. It will damge or effect ${stormTypes[type].damage.join(' ')}`,
                icon: 'logo192.png'
            });
            noti.onclick = () => alert('clicked');
        }
    }
    if (Notification.permission==='granted'){
        showNotification(time,title,text,type)
    }
    else if (Notification.permission==='default'){
        Notification.requestPermission().then(function(permission) { 
            if (permission==='granted'){
                showNotification(time,title,text,type)
            }
         });
    }
    else{
        Notification.requestPermission().then(function(permission) { 
            if (permission==='granted'){
                showNotification(time,title,text,type)
            }
         });
    }
    return null;
}