const callBackList={};
export default function(type, callback){
    if (callBackList[type] == undefined){
        callBackList[type] = new Set();
        window.addEventListener(type, (e)=>{
            for (let func of callBackList[type])
                func(e);
        });
    }
    callBackList[type].add(callback);
}