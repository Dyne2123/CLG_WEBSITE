import { getImageProp1 } from "../Api/apiutil";
import { getWebDetails } from "../Api/apiutil";

const url = "http://127.0.0.1:5000"

//send links for imageProp1
export async function imageProp1(url){
        let data = {"url":url}
        try{
                const response = await fetch("http://127.0.0.1:5000/admin/setImageProp",{
                        method:'POST',
                        headers:{
                                'Content-Type':'application/json'
                        },
                        credentials: "include",
                        body:JSON.stringify(data)
                });
                const ack = await response.json();
                getWebDetails();
                console.log(ack);
        }catch{

        }
}

// delete ImageProp url
export async function delImageProp(id){
        console.log(id);
        let data = {"id":id}
        try{
                const response = await fetch("http://127.0.0.1:5000//admin/deleteImgProp",{
                        method:'POST',
                        headers:{
                                'Content-Type':'application/json'
                        },
                        credentials: "include",
                        body:JSON.stringify(data)
                });
                const ack = await response.json();
                console.log(ack);
                if(ack.error == "1"){
                        getWebDetails();
                        return 1
                }else{
                        return -1
                }
        }catch{

        }
  
}

// get image names from image url for prop1
export async function getImageProp() {
        const webData = JSON.parse(sessionStorage.getItem("WebData"));
        const data = webData.filter (item => item.ComponentType === 'ImageComponent1');
        console.log(data);
        let labled_data = [];
        if (data != "-1"){
                data.map((obj) => {
                        let name = obj.Data.split('/')[4];
                        labled_data.push({"Data":name,"id":obj.id});
                });
                return labled_data;
        }
        return [];
}

// sending department card details to backend

export async function sendDepProp(data){
        let info = {"data":data,
                "email":sessionStorage.getItem("email")
        }
        try{
                const response = await fetch(url+"/admin/getDepProp",{
                        method:"POST",
                        headers:{
                                'Content-Type':'application/json'
                        },
                        credentials:"include",
                        body:JSON.stringify(info)
                        
                })
                console.log(await response.json());
        }catch (e){
                console.log("error "+e);
        }
}