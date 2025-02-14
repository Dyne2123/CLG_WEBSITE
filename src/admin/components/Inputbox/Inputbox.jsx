import styles from './inputbox.module.css';
import { useEffect,useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



export default function InputBox({handler,label="url",placeholder="Insert a link",multiline = false}){
    const [formData,setFormData] = useState("");

    const handelChange = (e) => {
        setFormData(e.target.value);
    }

    const handelSubmit = async (e) =>{
        e.preventDefault();
        handler(formData);
    }
    
    return (
        <div className={styles.InputBox}>
            <form onSubmit={handelSubmit}>
                <TextField id="outlined-basic"
                        style={{width:"100%"}}
                        label={label}
                        variant="outlined"
                        type='text'
                        placeholder={placeholder}
                        value={formData}
                        onChange={handelChange}
                        multiline = {multiline}
                /><br/>

                <Button variant="contained" type="submit"  endIcon={<SendIcon />}>
                    Submit
                </Button>
            </form>
        </div>
    );
}