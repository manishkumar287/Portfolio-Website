import React from 'react'
import './about.css'
import image from '../../../assets/manishkumar1.png'
import SocialContact from '../../common/SocialContact'

function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                    Hello There👋. I am <br /> <span className='info-name'>Manish Kumar</span>. <br /> I am a Enthusiastic Web Developer🟡 and <br /> a Competitive Coder💻.
                </div>
                <div className="about-photo">
                    <img src={image} className='picture' />
                </div>

            </div>
            <div className="about-bottom">
                <SocialContact/>
            </div>
        </div>
    )
}

export default About
