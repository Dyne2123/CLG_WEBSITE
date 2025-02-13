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
        const url = async ()=>{
            let res = await getImageProp1();
            if(res != "-1"){
                setData(res);
            }

        }
        url();
    },[])

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