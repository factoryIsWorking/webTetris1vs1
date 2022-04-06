//import appModel from './appModel';

const CONFIG={url:"http://localhost:4001/"}
//{url : window.location.href};
{
    let [proto,name,port] = CONFIG.url.split(':');
    CONFIG.assetURL = [proto,name,port].join(':')+"assets/";
    CONFIG.wsURL = ["ws",name,port].join(':');
}
const fetchSet = {
    get: async function(action){
        return fetch(   
                CONFIG.url+action,{
                    'method':'GET',
                    'Content-Type' : 'application/json',
                }
            );
    },
    post: async function(action,body){
        return fetch(   
                CONFIG.url+action,{
                    'method':'POST',
                    'Content-Type' : 'application/json',
                    'body': JSON.stringify(body),
                }
            );
    }
}
//this.webSocket = new WebSocket(appModel.CONFIG.wsURL)
export default {
    webSocket:null,
    signIn: async function(id,pw){
        let res = await fetchSet.post('user/signIn',{id,pw});
        res = await res.json();
        return res;
    },
    CONFIG,
}