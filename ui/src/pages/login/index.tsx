import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login(){
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [error,setError] = useState("")

    // query to login
    const login = ()=>{

        axios.post("/login",{name}).then(res=>{
            navigate(`/user/${res.data}`)
        }).catch(e=>{
            let error;
            if(e.response.data.message) error = e.response.data.message
            else error = "Server error! Try again later"
            setError(error)
        })
    }

    return <div className="is-fullwidth is-fullheight is-flex">
        <div style={{margin:"auto"}} ><div className={"box is-flex-direction-column is-flex"}>
            <div className="field">
                <h1 className="heading is-size-4">Welcome</h1>
            </div>
            <div className="field">
                <input
                    aria-label="name"
                    placeholder="Name"
                    className={!!error?"input is-danger":"input"}
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />
                {!!error && <p className="help is-danger">{error}</p>}
            </div>
            <div className="field">
                <button
                    disabled={!name}
                    aria-label="login"
                    className="button is-primary is-fullwidth"
                    onClick={login}
                >Login</button>
            </div>
        </div>
        </div>

    </div>
}