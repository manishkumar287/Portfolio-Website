import React from 'react';
import emailjs from "emailjs-com";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Form.css'

toast.configure()
function Form() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_w2waryv','template_p0giwrj',e.target,'user_s9Qz6slMc4mq3zVi4f1N7').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        document.getElementById('myForm').reset();
    }

    
    return (
        <div className='form-container'>
        <form onSubmit={sendEmail} className='form' id='myForm'>
        
            <input type="text" name='name' placeholder='Name'/>
        
        
            <input type="email" name='user_email' placeholder='E-mail' />
        
        
            <textarea name="message" id="" cols="25" rows="10" placeholder='Type your message' className='textarea'/>
        

            <input type="submit" onClick={()=>{ toast('Email Sent Successfully!');
            }
            } value="Send" className='btn'/>
        </form>
            
        </div>
    )
}

export default Form
