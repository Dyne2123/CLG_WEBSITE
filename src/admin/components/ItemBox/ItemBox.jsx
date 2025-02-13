import { getImageProp } from "../../Api";
import { useEffect,useState } from "react";
import styles from './itembox.module.css';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'



export default function ItemBox({itemFun,deleteFun}){
    const [Items,setItems] = useState([{"id":"","Data":""}]);
    const [id,setid] = useState("");
    useEffect(()=>{
        const fetchItems = async () =>{
            const itemArr = await itemFun();
            if(itemArr != "-1"){
                 setItems(itemArr); 
            }
           
        };
        fetchItems();
    },[]);

    const handleDelete = async (id) => {
        const del = await deleteFun(id);
    }

    return (
        <div className={styles.Itembox}>
            {Items.map((obj,index) => (
                 <div key={index} className={styles.item}>
                    <p id={styles.text}>{obj.Data}</p>
                    <DeleteIcon style={{padding:"10px"}} className={styles.icon} onClick={()=>handleDelete(obj.id)}/>
                </div>
            ))}
          
           
        </div>
    );
}