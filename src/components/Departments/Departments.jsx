import styles from './departments.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Card({url="https://www.mtu.edu/cs/what/images/what-is-computer-science-banner1600.jpg",
               heading="Hello",
               content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur assumenda quos dolores facilis eum quidem dignissimos at dolor expedita esse pariatur,."
              }){
    return(
        <div className={styles.card1}>
            <div className={styles.imgContainer}>
                <img src={url}/>
            </div>
            <div className={styles.contentContainer}>
                <h1>{heading}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
}


export default function Departments(){
    return (
        <div className={styles.department}>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.mySwiper}
             >
                <SwiperSlide><Card url="https://www.mtu.edu/cs/what/images/what-is-computer-science-banner1600.jpg" 
                  heading="Computer Science Engg"
            /></SwiperSlide>
                <SwiperSlide><Card url="https://www.mtu.edu/cs/what/images/what-is-computer-science-banner1600.jpg" 
                  heading="Computer Science Engg"
            /></SwiperSlide>
                <SwiperSlide><Card url="https://www.mtu.edu/cs/what/images/what-is-computer-science-banner1600.jpg" 
                  heading="Computer Science Engg"
            /></SwiperSlide>
                <SwiperSlide><Card url="https://www.mtu.edu/cs/what/images/what-is-computer-science-banner1600.jpg" 
                  heading="Computer Science Engg"
            /></SwiperSlide>
            </Swiper>
            
            
        </div>
    );
}