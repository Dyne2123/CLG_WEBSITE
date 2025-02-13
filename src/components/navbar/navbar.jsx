import styles from "./navbar.module.css"
import { useEffect,useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from "../../assets/logo.png"
export default function Navbar(){
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.banner}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.about}>
                    <p id={styles.line1}>VISVODAYA ENGINEERING COLLEGE</p><br></br>
                    <p id={styles.line2}>(Affiliated to J.N.T.U.A. and Approved by AICTE)</p><br></br>
                    <p id={styles.line3}>KAVALI – 524201, S.P.S.R Nellore Dist., A.P. India. Ph: 08626-240056 </p>
                </div>
                <Button variant="outlined" className={styles.mu1} href="/login">Login</Button>
               
            </div>
        </div>
        <div className={styles.navbarContainer2}>
            <div className={styles.nav}>
                <Stack spacing={8} direction="row" className={styles.stack}>
                            <Button variant="text"> Home</Button>
                            <Button variant="text"> About us</Button>
                            <Button variant="text"> Academics</Button>
                            <Button variant="text"> Placements</Button>
                            <Button variant="text"> Departments</Button>
                            <Button variant="text"> Admissions</Button>
                            <Button variant="text"> Campus Life</Button>
                            <Button variant="text"> Admissions</Button>
                            <Button variant="text"> Admissions</Button>
                            <Button variant="text"> Admissions</Button>
                </Stack>
            </div>
        </div>
        </> 
    );
}