import { useEffect,useState } from "react";
import ImageSlider from "../components/imageslider/imageSlider";
import Departments from "../components/Departments/Departments";
import styles from './admin.module.css'
import InputBox from "./components/Inputbox/Inputbox";
import InputForm from "./components/InputForm/InputForm";
import { imageProp1 } from "./Api";
import ItemBox from "./components/ItemBox/ItemBox";
import { getImageProp,delImageProp } from "./Api";

export default function Admin(){
    const [showProp1,setProp1] = useState(false);
    const [showDepProp,setDepProp] = useState(false);
    const ToggleImgProp = () => {
        setProp1(!showProp1);
    }
    const ToggleDepProp = () => {
        setDepProp(!showDepProp);
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
                    <InputBox handler={imageProp1} style={{width:"100%"}}/>
                </div>
                
               
            </div>}
            { showDepProp && <div>
                <div className={styles.depProp1}>
                    <Departments />
                </div>
                <div>
                    <InputForm/>
                </div>
            </div>}
            

        </div>
    );
}