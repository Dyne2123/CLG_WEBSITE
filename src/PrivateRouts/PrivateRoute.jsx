
import { Navigate,useParams } from "react-router-dom";
import { Validate } from "../Api/apiutil";
import { useEffect,useState } from "react";

export  function PrivateRoute1({children}){
    const {uid} = useParams();
    const role = sessionStorage.getItem("role");
    const [isValid,setIsValid] = useState(null); 
    useEffect(()=>{
        Validate(uid,role).then((result) => {
            setIsValid(result);
        }).catch(()=>{setIsValid(0)});
    },[])

    console.log(isValid);

    if(isValid == 1){
        return children;
    }else{
        return(
            <h1>Loading</h1>
        )
    }
}