import {useEffect, useRef, useState} from "react";
import { io } from "socket.io-client";
import {EmploeesTable} from "./emploeesTable";

export type UserType = {
    id:string | undefined
    status:string
}

export type EmploeeType = {
    name: string
    status: "Working" | "Vacation" | "Sickness"
    timestamp: Date
    _id: string
}
export function Users({id,status}:UserType){
    const socket = useRef<any>()

    const [empStatus,setEmpStatus] = useState<string>(status)
    const [employees,setEmployees] = useState<Array<EmploeeType>>([])

    useEffect(()=>{
        if(!id) return
        socket.current = io("/",)
        socket.current.on('send', (res:any)=>{
            setEmployees(res.map((employee: EmploeeType)=>({...employee,timestamp:new Date(employee.timestamp)})))
        });

    },[id])
    return <div style={{padding:"64px 128px"}}>
        <div style={{padding:"0 16px"}} className="block is-flex is-align-items-center">
            <h2 className="heading is-size-4">Status</h2>
            <div style={{paddingLeft:255}} className="select">
                <select  onChange={e=>setEmpStatus(e.target.value)} value={empStatus}>
                    <option value="Working">Working</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Sickness">Sickness</option>
                </select>
            </div>
        </div>
        <hr/>
        <EmploeesTable employees={employees}/>
    </div>
}