// import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import RandomChatImg from '../assets/random_chat.jpg';
import ChatShareImg from '../assets/chat_share.jpg';
import BankImg from '../assets/bank.jpg'
import propTypes from 'prop-types'

import FlutterIcon from '../assets/flutter.svg';
import NodeJsIcon from '../assets/nodejs.svg';
import MongoDbIcon from '../assets/mongodb.svg';
import SocketIoIcon from '../assets/socketio.svg';
import JavaIcon from '../assets/java.svg'
import MysqlIcon from '../assets/mysql.svg'

import './ProjectContent.css';
import { motion } from 'framer-motion'

function ProjectContent({ onMouseEnter, onMouseLeave }) {

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('in-view');
    //             } else {
    //                 entry.target.classList.remove('in-view');
    //             }
    //         });
    //     });

    //     const projectHeading = document.querySelector('.project-heading');
    //     const cards = document.querySelectorAll('.card')
    //     if (projectHeading) {
    //         observer.observe(projectHeading);
    //     }
    //     cards.forEach((card) => {
    //         // card.style.transitionDelay = `${index * 2}s`;
    //         observer.observe(card);
    //     })


    //     return () => {
    //         if (projectHeading) {
    //             observer.unobserve(projectHeading);
    //         }

    //         cards.forEach((card) => {
    //             observer.unobserve(card);
    //         });
    //     };
    // }, []);

    return (
        <div className="project-content">
            <motion.h1
                whileInView={
                    {
                        opacity: 1,
                        x: 0

                    }
                }

                initial={{
                    opacity: 0,
                    x: -100,
                }}
                transition={{ duration: 0.2, delay: 0 }}

                className="project-heading">
                Projects
            </motion.h1>

            <div className="cards-container">

                {/* // whileInView={{ opacity: 1, y: 0 }}
                // initial={{ opacity: 0, y: 100 }}
                // transition={{ delay: 0, duration: 1 }} */}

                <motion.div
                    whileInView={
                        {
                            opacity: 1,
                            y: 0

                        }
                    }

                    initial={{
                        opacity: 0,
                        y: 100,
                    }}

                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ProjectCard
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        title="Random Chat Web Application"
                        imageSrc={RandomChatImg}
                        className='card'
                        description='A web app for real-time chat with random
                    strangers, featuring random pairing and an
                    intuitive UI. Built with Flutter and Node.js
                    with Socket.IO for responsive interactions.'
                        skills={[FlutterIcon, NodeJsIcon, SocketIoIcon]} />
                </motion.div>

                <motion.div
                    whileInView={
                        {
                            opacity: 1,
                            y: 0

                        }
                    }

                    initial={{
                        opacity: 0,
                        y: 100,
                    }}

                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ProjectCard
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        title="Classroom Chat and File Sharing
                    Application"
                        imageSrc={ChatShareImg}
                        className='card'
                        description='A classroom app enables seamless chat
                    and file sharing among students. Built with
                    Flutter, Node.js, TypeScript, and MongoDB.'
                        skills={[FlutterIcon, NodeJsIcon, MongoDbIcon, SocketIoIcon]} />
                </motion.div>


                <motion.div
                    whileInView={
                        {
                            opacity: 1,
                            y: 0

                        }
                    }

                    initial={{
                        opacity: 0,
                        y: 100,
                    }}

                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <ProjectCard
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        title="Bank Management System"
                        imageSrc={BankImg}
                        className='card'
                        description='A Java-based bank management system
                    using MySQL for basic account and
                    transaction management.'
                        skills={[JavaIcon, MysqlIcon]} />
                </motion.div>



                {/* <ProjectCard
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    title="Random Chat Web Application"
                    imageSrc={RandomChatImg}
                    className='card'
                    description='A web app for real-time chat with random
                    strangers, featuring random pairing and an
                    intuitive UI. Built with Flutter and Node.js
                    with Socket.IO for responsive interactions.'
                    skills={[FlutterIcon, NodeJsIcon, SocketIoIcon]}
                /> */}

                {/* <ProjectCard
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    title="Classroom Chat and File Sharing
                    Application"
                    imageSrc={ChatShareImg}
                    className='card'
                    description='A classroom app enables seamless chat
                    and file sharing among students. Built with
                    Flutter, Node.js, TypeScript, and MongoDB.'
                    skills={[FlutterIcon, NodeJsIcon, MongoDbIcon, SocketIoIcon]}
                />
                <ProjectCard
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    title="Bank Management System"
                    imageSrc={BankImg}
                    className='card'
                    description='A Java-based bank management system
                    using MySQL for basic account and
                    transaction management.'
                    skills={[JavaIcon, MysqlIcon]}
                /> */}
                {/* // whileInView={{ opacity: 1, y: 0 }}
                // initial={{ opacity: 0, y: 100 }}
                // transition={{ delay: 0.2, duration: 1 }} */}

                {/* <ProjectCard
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    title="Classroom Chat Share Application"
                    imageSrc={ChatShareImg}
                    className='card'
                /> */}

            </div>
        </div >
    );
}

ProjectContent.propTypes = {
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func

}
export default ProjectContent;
