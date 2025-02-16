import { data } from "react-router";

const url = "http://127.0.0.1:5000/";


//gets image links 
export async function getImageProp1(){
    try{
        const response = await fetch(url+"/getImgProp1",{
            credentials: "include",
        });
        const data = await response.json();
        if(data["error"] == "-1"){
            return -1;
        }
        return data;
    }catch{
        return -1;
    }
}



//authenticate users 
export async function Authenticate(data,navigate){
    try{
        const response = await fetch(url+"/login",{
            method:'POST',
            credentials: "include",     //including securitykey cookie
            headers:{
                    'Content-Type':'application/json'
                    },
            body:JSON.stringify(data)
        });
            let ack = await response.json();        //contains [{login_auth = boolean ,sessionID="",role=""}
        if(ack.login_auth == "true"){       //checking boolean response from server 
            data = ack.data[0];     //selecting 0th index json file
            sessionStorage.setItem("sessionId",data.sessionID);     //sending sessionID to session storage
            sessionStorage.setItem("role",data.Role);       //sending role to session storage
            sessionStorage.setItem("email",data.email);
            let uid = sessionStorage.getItem("sessionId");      //gettion sessionId to redirect
            navigate(`/admin/${uid}`);
        }else{
            console.log("wrong username or password");
            return -1;
        }
    }catch{
        return 1;
    }

}


//validating security key
export async function Validate(sessionID,role) {
    try {
        
        const response = await fetch(url + "/verify", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
                },
            body: JSON.stringify({"sessionID":sessionID,"role":role}),
            credentials: "include",  
        });
        const ack = await response.json();
        // console.log(ack)
        if(ack.verified == "True"){
            return 1;
        }else{
            return -1;
        }
    } catch {
        return -1;
    }
}

//send departmen card details

