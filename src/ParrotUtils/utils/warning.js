export function warning(valid,message){
    if(process.env.NODE_ENV!=="production" && !valid && console!==undefined){
        console.error(`Warning:${message}`)
    }
}