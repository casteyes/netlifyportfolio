import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from 'react-router-dom';
import {motion} from 'framer-motion';


function HomePage(){
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1 }} exit={{opacity: 0}}>
            <div className="HomePage">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, I am 
                        <span> Daniel Collins.</span>
                    </h1>
                    <p className="h-sub-text">
                        Welcome to my Web Development portfolio.
                    </p>
                    <div className="icons">
                        <Link className="icon-holder">
                        <a href="https://github.com/casteyes"><FontAwesomeIcon icon={faGithub} className="icon gh"/></a>
                        </Link>
                        <Link className="icon-holder">
                        <a href="https://www.linkedin.com/in/daniel-collins-927b1ab0/"><FontAwesomeIcon icon={faLinkedin} className="icon li"/></a>
                        </Link>
                        
                    </div>
                </header>
            </div>
        </motion.div>
    )
}

export default HomePage;
