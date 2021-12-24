import React from 'react'
import About from './about/About'
import './body.css'
import Project from './projects/Project'
import Work from './work/Work'
import Skills from './skills/Skills'
import Contact from './contact/Contact'
function Body() {
    return (
        <div className='body'>
            <section id='about'>
                <About/>
            </section>
            <section id='projects'>
                <Project/>
            </section>
            <section id='skills'>
                <Skills/>
            </section>
            {/* <section id='work'>
                <Work/>
            </section> */}
            <section id='contact'>
                <Contact/>
            </section>
        </div>
    )
}

export default Body
