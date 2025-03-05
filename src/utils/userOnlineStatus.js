import { useEffect, useState } from "react"
///CUSTOM HOOK///////////////////
const userOnlineStatus=()=>{
    const [status, setStatus]=useState(true);
    useEffect(()=>{
window.addEventListener("offline",()=>{
    setStatus(false);
})
window.addEventListener("online",()=>{
    setStatus(true);
})
    },[])
    return status;
}
export default userOnlineStatus;