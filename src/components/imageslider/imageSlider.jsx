import styles from './imageslider.module.css';
import { useEffect,useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { getImageProp1 } from '../../Api/apiutil';
import {Navigation,Autoplay} from 'swiper/modules';

function ImgContainer({url="https://i.ibb.co/rfMs1vZ8/building.jpg"}){
    return (
        <div className={styles.img_c1}>
            <img src={url}/>
        </div>
    )
}

export default function ImageSlider(){
    const [data,setData] = useState([{"id":"1","url":"#"}]);

    useEffect(()=>{
        try{
        let webData = JSON.parse(sessionStorage.getItem("WebData"));
        let filtered = webData.filter (item => item.ComponentType === 'ImageComponent1');
        console.log(filtered);
        setData(filtered);
        }catch{

        }
    },[2])

    return (
        <div className={styles.slider1}>
            <Swiper navigation={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }} 
            modules={[Navigation]} className={styles.myswiper}
            loop={true}
                
            >      
                {data.map((obj,index)=>(
                <SwiperSlide><ImgContainer url={obj.Data}/></SwiperSlide>
                ))}
                
            </Swiper>
            {/* <ImgContainer/> */}
        </div>
    )
}