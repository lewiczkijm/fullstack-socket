import {useMemo} from "react";

type MessageType = {
    type?: "error"
    content: string
}
export function Message({type, content}:MessageType){
    const [className,message] = useMemo(()=>{
        switch (type) {
            case "error": return ["message is-danger", "Error"];
            default: return ["message",""];
        }
    },[type])

    return <article style={{margin:"auto"}} className={className}>
        <div className="message-header">{message}</div>
        <div className="message-body">{content}</div>
    </article>
}