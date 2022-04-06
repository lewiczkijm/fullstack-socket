import {Header} from "./header";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_PREFIX, SERVER_ERROR_MSG} from "../../env";
import {Message} from "../../components/message";

export function User(){
    const {id} = useParams()

    const [name, setName] = useState("...")
    const [error, setError] = useState("")

    useEffect(()=>{
        axios.get(`${API_PREFIX}/user/${id}`)
            .then(res=>setName(`Hello ${res.data.name}`))
            .catch(e=>{
                setError(e.response.data.message || SERVER_ERROR_MSG)
            })

    },[])

    return <div style={{minHeight:"100vh"}}>
        <Header name={name}/>
        {error?
            <div className="is-fullheight is-flex"><Message type={"error"} content={error}/></div>
            :<div></div>}
    </div>
}