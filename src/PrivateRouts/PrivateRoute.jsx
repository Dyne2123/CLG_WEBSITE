
import { Navigate,useParams } from "react-router-dom";

export function PrivateRoute1({children}){
    const {uid} = useParams();
    return children
}