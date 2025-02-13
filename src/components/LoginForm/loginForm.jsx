import styles from './loginform.module.css'
import { Authenticate } from '../../Api/apiutil';
import { useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";

import TextField  from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


function AdminForm({Submit}){
    const [formData,setFromData] = useState({
        "email":"",
        "password":"",
    });
    const style = {marginTop:"15px",width:"100%"}
    const onChange = (e) => {
        const {name,value} = e.target;
        setFromData((prevData) => ({
            ...prevData,
            [name]:value
        }))
    }

    const submitForm = (e) => {
        e.preventDefault();
        Submit(formData);
    }
    
    return (
        <div className={styles.loginContainer}>
            <form onSubmit={submitForm}>
                <TextField id="standard-basic" label="Email" variant='standard' style={style}
                    name="email"
                    value={formData.email} 
                    onChange={onChange}
                />
                <TextField id="standard-basic" type="password"  label="Password" variant='standard' style={style}
                    name="password"
                    value={formData.password}
                    onChange={onChange}
                />
                <br/>
                <Button variant='contained' id={styles.bt1} type="submit">Login</Button>
            </form>

        </div>
    );
}

export default function LoginForm(){
    const [role,setRole] = useState("Staff");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const SubmitData = async (data) => {
        data["role"] = role;
        const auth = await Authenticate(data,navigate);
    }

    return (
        <div className={styles.loginForm}>
            <div><h1>Sign In</h1></div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Role</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={role}
                    label="Admin"
                    onChange={handleChange}
                >
                    
                    <MenuItem value="Staff">Staff</MenuItem>
                    <MenuItem value="Student">Student</MenuItem>
                    
                </Select>
            </FormControl>
        {role == "Staff" && <AdminForm Submit={SubmitData}/>}
        </div>
    )
}