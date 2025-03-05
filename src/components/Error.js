import { useRouteError } from "react-router";

const Error=()=>{
    const err=useRouteError();
    return(        
    <div className="Error">
    <h1>Ooops....!!!!</h1>
    <h2>{err.status}</h2>
    <h2>{err.statusText}</h2>
</div>
    )
}

export default Error;