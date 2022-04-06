import {useEffect, useRef} from "react";
import { io } from "socket.io-client";

export type UserType = {
    id:string | undefined
}
export function Users({id}:UserType){
    const socket = useRef<any>()
    useEffect(()=>{
        if(!id) return
        socket.current = io("/",)
        socket.current.on('send', (res:any)=>{
            console.log(res)
        });

    },[id])
    return <div></div>
}