
import { useEffect,useState } from "react";
import styles from './homepage.module.css'
import Navbar from "../components/navbar/navbar";
import ImageSlider from "../components/imageslider/imageSlider";
import Departments from "../components/Departments/Departments";
import Announcement from "../components/AnnouncementBoard/Announcements";

export default function Homepage(){

    return (
        <div className={styles.homepage}>
            <Navbar/>
            <ImageSlider/>
            <Departments/>
            <Announcement/>
        </div>
    )
}