import { getImageProp } from "../../Api";
import { useEffect,useState } from "react";
import styles from './itembox.module.css';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import InputBox from "../Inputbox/Inputbox";
import { imageProp1 } from "../../Api";


export default function ItemBox({itemFun,deleteFun}){
    const [Items,setItems] = useState([{"id":"","Data":""}]);
    const [id,setid] = useState("");
    const [refresh,setRefresh] = useState(1);

    const fetchItems = async () =>{
        const itemArr = await itemFun();
        
        if(itemArr != "-1" && Array.isArray(itemArr)){
             setItems([...itemArr]); 
        }
    };
   
    const handleDelete = async (id) => {
        const del = await deleteFun(id);
        setRefresh((prev) => prev+1);
        
    }
    const handelRefresh = () => {
        setRefresh((prev) => prev+2);
    }
    useEffect(()=>{
        fetchItems();
        setInterval(fetchItems,800)
    },[refresh])

  

    return (
        <div>
        <div className={styles.Itembox}>
            {Items.map((obj,index) => (
                 <div key={index} className={styles.item}>
                    <p id={styles.text}>{obj.Data}</p>
                    <DeleteIcon style={{padding:"10px"}} className={styles.icon} onClick={()=>handleDelete(obj.id)}/>
                    {/* <h1>{JSON.stringify(Items)}</h1> */}
                </div>
            ))}
           
        </div>
        <InputBox handler={imageProp1} style={{width:"100%"}} callBack={handelRefresh}/>
        </div>
    );
}