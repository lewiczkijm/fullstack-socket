import {useState} from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [error,setError] = useState("")
    const login = async ()=>{
        const config = {
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name})
        }

        try{
            // TODO change urls as /api/proxy - for production version
            const res = await fetch("/login",config)
            if(!res.ok) throw res
            const id = await res.text()
            navigate(`/user/${id}`)
        } catch(e){
            // @ts-ignore
            const message = await e.text().catch("Server error! Try again later")
            setError(message)
        }
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