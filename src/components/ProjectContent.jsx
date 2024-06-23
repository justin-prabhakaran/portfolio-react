// import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import RandomChatImg from '../assets/random_chat.jpg';
import ChatShareImg from '../assets/chat_share.jpg';
import './ProjectContent.css';
import { useEffect } from 'react';

function ProjectContent({ onMouseEnter, onMouseLeave }) {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        const projectHeading = document.querySelector('.project-heading');
        const cards = document.querySelectorAll('.card')
        if (projectHeading) {
            observer.observe(projectHeading);
        }
        cards.forEach((card) => {
            // card.style.transitionDelay = `${index * 2}s`;
            observer.observe(card);
        })


        return () => {
            if (projectHeading) {
                observer.unobserve(projectHeading);
            }

            cards.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="project-content">
            <h1 className="project-heading">
                Projects
            </h1>

            <div className="cards-container">

                {/* // whileInView={{ opacity: 1, y: 0 }}
                // initial={{ opacity: 0, y: 100 }}
                // transition={{ delay: 0, duration: 1 }} */}

                <ProjectCard
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    title="Random Chat Application"
                    imageSrc={RandomChatImg}
                    className='card'
                />



                {/* // whileInView={{ opacity: 1, y: 0 }}
                // initial={{ opacity: 0, y: 100 }}
                // transition={{ delay: 0.2, duration: 1 }} */}

                <ProjectCard
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    title="Classroom Chat Share Application"
                    imageSrc={ChatShareImg}
                    className='card'
                />

            </div>
        </div>
    );
}

export default ProjectContent;
