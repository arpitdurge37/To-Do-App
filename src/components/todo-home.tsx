import { Link } from "react-router-dom";

export function TodoHome(){
    return(
        <div style={{height:'55vh'}} className="d-flex justify-content-center align-items-center">
           <div style={{marginTop:'-100px'}}>
             <Link to="register" className="btn btn-warning me-2">New User Regiser</Link>
             <Link to="login" className="btn btn-light">User Login</Link>
           </div>
        </div>
    )
}