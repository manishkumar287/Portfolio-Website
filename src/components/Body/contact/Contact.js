import React from 'react'
import Separator from '../../common/Separator'
import './contact.css'
import SocialContact from '../../common/SocialContact'
import Form from './Form'

function Contact() {
    return (
        <div className='contact'>
            <Separator/>
            <label className='section-title'>
               Contect Me 
            </label>
            <div className="contact-container">
                <div className="form">
                    <Form/>
                </div>
                <div className="download">
                    <a download href={require("../../../assets/ManishKumarResume__.pdf").default}>
                    <i class="fi fi-rr-cloud-download download-icon"></i>
                    Download Resume
                    </a>
                </div>
            </div>
    <SocialContact/>
        </div>
    )
}

export default Contact
