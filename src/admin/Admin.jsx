import { useEffect,useState } from "react";
import ImageSlider from "../components/imageslider/imageSlider";
import Departments from "../components/Departments/Departments";
import styles from './admin.module.css'
import InputBox from "./components/Inputbox/Inputbox";
import InputForm from "./components/InputForm/InputForm";

import ItemBox from "./components/ItemBox/ItemBox";
import { getImageProp,delImageProp } from "./Api";

export default function Admin(){
    const [showProp1,setProp1] = useState(false);
    const [showDepProp,setDepProp] = useState(false);
    const [data,setData] = useState("");
    const ToggleImgProp = () => {
        setProp1(!showProp1);
    }
    const ToggleDepProp = () => {
        setDepProp(!showDepProp);
    }

    const testData = (text) => {
        setData(text);
    } 

    return (
        <div className={styles.admin}>
            <div><h1>Admin Panel</h1></div>
            <div className={styles.nav}>
                <button onClick={ToggleImgProp}>Main Image Slider</button>
                <button onClick={ToggleDepProp}>Department Prop</button>
            </div>
            { showProp1 && <div className={styles.imgSlider}>
                <div  className={styles.imgProp}>
                    <ImageSlider/>
                    <ItemBox itemFun={getImageProp} deleteFun={delImageProp}/>  
                   
                </div>
                
               
            </div>}
            { showDepProp && <div>
                <div className={styles.depProp1}>
                    <Departments />
                </div>
                <div className={styles.inputForm}>
                    <InputForm/> 
                    
                </div>
            </div>}
            

        </div>
    );
}