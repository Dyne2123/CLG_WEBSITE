import { useState,useRef} from 'react';
import InputBox from '../Inputbox/Inputbox';
import { Card } from '../../../components/Departments/Departments';
import Button from '@mui/material/Button';
import { sendDepProp } from '../../Api';


export default function InputForm(){
    const [imageLink,setImageLink] = useState(null);
    const [heading,setHeading] = useState(null);
    const [body,setBody] = useState(null);
    const [error,setError] = useState(null);
    const timeoutRef = useRef(null); 


    const getHeading = (data) => {
        setHeading(data);
    }
    const getBody = (data) => {
        setBody(data);
    }

    const getUrl = (data) => {
        setImageLink(data);
    }
    const handelSubmit = () => {

        if(imageLink != null && heading != null && body != null){
            console.log("ok")
            const data = {
                "image":imageLink,
                "heading":heading,
                "body":body,
                "propType":"depProp"
            }
            sendDepProp(data)
            .then((e) => {
                setError(e === 1 ? false : true);
                clearTimeout(timeoutRef.current); 
                timeoutRef.current = setTimeout(() => setError(null), 3000);
            })
            .catch(() => {
                setError(true);
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => setError(null), 3000);
            });
        }
    }

    return (
        <div style={{
            display:"flex",
        }}> 
            <div style={{width:"20rem"}}>
                <InputBox label='url' placeholder='Enter image url' showButton={false} handler={getUrl}/>
                <InputBox showButton={false} label='heading' placeholder='Enter heading' handler={setHeading}/>
                <InputBox label='body' placeholder='Enter body text' multiline={true} handler={setBody} butttonName='update'/>
            </div>
            <div style={{padding:"1.2rem"}}>
                <Card url={imageLink} heading={heading} content={body}/>
                <Button  variant="contained" style={{marginLeft:"10px"}} onClick={handelSubmit}>upload card</Button>
                {(error != null && error == true)?<h4 style={{color:"red"}}>Error sending</h4>:(error != null ?<h4 style={{color:"green"}}>Data sent successfully</h4>:"")}
            </div>
        </div>
    );
}