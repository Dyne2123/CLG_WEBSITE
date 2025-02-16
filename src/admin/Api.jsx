import { getImageProp1 } from "../Api/apiutil";

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
                if(ack.error == "1"){
                        return 1
                }else{
                        return -1
                }
        }catch{

        }
  
}

// get image names from image url for prop1
export async function getImageProp() {
        const data = await getImageProp1();
        console.log(data);
        let labled_data = [];
        if (data != "-1"){
                data.map((obj) => {
                        let name = obj.Data.split('/')[4];
                        labled_data.push({"Data":name,"id":obj.id});
                });
                return labled_data;
        }
        return []
}

export async function sendDepProp(data){
        console.log(data);
        return 1;

}