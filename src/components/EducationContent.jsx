

import { useEffect } from 'react';
import './EducationContent.css'
const exprience = [
    {
        year: "2019",
        degree: "10th Standard",
        school: "Meadows Hr Sec School",
        location: "kalaiyarkurichi"
    },
    {
        year: "2021",
        degree: "12th Standard",
        school: "Meadows Hr Sec School",
        location: "kalaiyarkurichi"
    },
    {
        year: "2021-2025",
        degree: "Bachelor of Computer Science and Engineering",
        school: "AAA College of Engineering and Technology",
        location: "Amathur"
    },

];

function EducationContent() {



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
                else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.5 });

        const educationHeading = document.querySelector('.education-heading');

        const years = document.querySelectorAll('.year');
        const degrees = document.querySelectorAll('.degree');
        const schools = document.querySelectorAll('.school');
        const locations = document.querySelectorAll('.location');

        if (educationHeading) {
            observer.observe(educationHeading);
        }
        years.forEach((year) => {
            observer.observe(year);
        })
        degrees.forEach((degree) => {
            observer.observe(degree);
        })
        schools.forEach((school) => {
            observer.observe(school);
        })
        locations.forEach((location) => {
            observer.observe(location);
        })

        return () => {
            if (educationHeading) {
                observer.unobserve(educationHeading);
            }
            years.forEach((year) => {
                observer.unobserve(year);
            })
            degrees.forEach((degree) => {
                observer.unobserve(degree);
            })
            schools.forEach((school) => {
                observer.unobserve(school);
            })
            locations.forEach((location) => {
                observer.unobserve(location);
            })

        }

    }, []);





    return (
        <div className="education-content">

            <h1
                //   initial={{
                //     x: -100,
                //     opacity: 0
                //   }}

                //   whileInView={{
                //     x: 0,
                //     opacity: 1
                //   }}

                //   transition={{ duration: 0.5 }}
                className="education-heading">
                Educations
            </h1>

            <div className="education-container">
                {
                    exprience.map((content, index) => (
                        <div key={index} className="education-item">
                            <h1
                                //   initial={{
                                //     x: -100,
                                //     opacity: 0
                                //   }}

                                //   whileInView={{
                                //     x: 0,
                                //     opacity: 1
                                //   }}

                                //   transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="degree">{content.degree}
                            </h1>
                            <div className="school-content">
                                <h1
                                    // initial={{
                                    //   x: 100,
                                    //   opacity: 0
                                    // }}

                                    // whileInView={{
                                    //   x: 0,
                                    //   opacity: 1
                                    // }}

                                    // transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="school">{content.school}</h1>
                                <h1
                                    // initial={{
                                    //   x: 100,
                                    //   opacity: 0
                                    // }}

                                    // whileInView={{
                                    //   x: 0,
                                    //   opacity: 1
                                    // }}

                                    // transition={{ duration: 0.5, delay: 0.2 * index }}
                                    className="year">{content.year}</h1>
                                <h1
                                    // initial={{
                                    //   x: 100,
                                    //   opacity: 0
                                    // }}

                                    // whileInView={{
                                    //   x: 0,
                                    //   opacity: 1
                                    // }}

                                    // transition={{ duration: 0.5, delay: 0.3 * index }}
                                    className="location">{content.location}</h1>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default EducationContent