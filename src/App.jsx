import { useEffect, useRef, useState } from "react";
// import { motion } from 'framer-motion';
import "./App.css";
import { ReactTyped } from "react-typed";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import GitHubIcon from "./components/icons/GitHubIcon";

import ProjectContent from "./components/ProjectContent";
import EducationContent from "./components/EducationContent";
import TechContent from "./components/TechContent";
import ParticleBg from "./components/ParticleBg";



import gsap from 'gsap';
import SplitType from "split-type";
function App() {
  const cursorRef = useRef(null)
  const [cursorVariant, setCursorVariant] = useState('default');

  // const [isLinkedIconHovered, setLinkedIconHovered] = useState(false);
  // const [isGitHubIconHovered, setGitHubIconHovered] = useState(false);
  const [isEmailHovered, setEmailHovered] = useState(false)
  const mouseMove = (e) => {
    const cursor = cursorRef.current;
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  };
  useEffect(() => {

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    new SplitType('#description', {
      type: 'lines'
    });

    gsap.from('#description .line', {
      y: '100%',
      opacity: 1,
      duration: 0.65,
      ease: 'back.out',
      stagger: 0.15,

    })

    new SplitType('#hi-intro', {
      type: 'lines'
    });

    gsap.from('#hi-intro .line', {
      y: '100%',
      opacity: 1,
      duration: 0.65,
      ease: 'back.out',
      stagger: 0.15,

    })

    new SplitType('#name', {
      type: 'words'
    });

    gsap.from('#name .word', {
      y: '100%',
      opacity: 1,
      duration: 0.65,
      ease: 'power1.out',
      stagger: 0.15,

    })
    new SplitType('#name', {
      type: 'words'
    });

    gsap.from('#name .word', {
      y: '100%',
      opacity: 1,
      duration: 0.60,
      ease: 'power1.out',
      stagger: 0.10,

    })

  }, []);

  const handleMouseEnter = () => setCursorVariant('text');
  const handleMouseLeave = () => setCursorVariant('default');
  return (
    <>
      <div className="App">

        <ParticleBg className="particles" />
        <div ref={cursorRef} className={`cursor ${cursorVariant}`} ></div>

        <div className="nav-content">
          <ul className="nav-ul">
            <li className="nav-li"
              onMouseEnter={handleMouseEnter}

              onMouseLeave={handleMouseLeave}

            >Education</li>
            <li className="nav-li"
              onMouseEnter={handleMouseEnter}

              onMouseLeave={handleMouseLeave}
            >Projects</li>
            <li className="nav-li"


              onMouseEnter={handleMouseEnter}

              onMouseLeave={handleMouseLeave}>
              Contact</li>

          </ul>
        </div>



        <div className="left-icons">
          <div className="icons">
            <div
              className="icon"

              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <LinkedInIcon />
            </div>
            <div
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <GitHubIcon />
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="right-icons">
          <div
            className="email"
            onMouseEnter={() => {
              setCursorVariant("text");
              setEmailHovered(true);
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
              setEmailHovered(false);
            }}
          >
            c.m.justinprabhakaran@gmail.com
          </div>
          <div className="line" style={
            {
              marginTop: isEmailHovered ? 162 : 150,
            }
          }></div>
        </div>


        <div className="content">
          <div className="intro">
            <div
              // variants={animationVariants(0.5)}
              // initial='hidden'
              // animate='show'
              id="hi-intro">Hi all. I am</div>
            <div
              onMouseEnter={
                handleMouseEnter
              }
              onMouseLeave={
                handleMouseLeave
              }
              id="name"
            >JUSTINPRABHAKARAN M</div>
            <div id="roles">
              <span>{">"}</span>
              <ReactTyped

                strings={
                  roles
                }
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </div>
            <p id="description">{description}</p>
          </div>



          <TechContent />


          <EducationContent />




          <ProjectContent onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

          />


        </div>

      </div>
    </>
  );
}

const roles = ["Flutter Developer", "Java Developer", "Python Developer", "React Developer", "Cpp Developer", "Dart Developer"];
const description =
  "I am well-versed in several programming languages and frameworks, including Java, Python, Dart, Flutter, Node.js, C, and C++. With a passion for software development, I enjoy tackling challenges and crafting innovative solutions.";


// const animationVariants = (delay) => ({
//   hidden: {
//     x: -100,
//     opacity: 0
//   },

//   show: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5, delay: delay
//     }
//   }

// });



// const techIconVariants = (duration) => ({
//   initial: {
//     y: -10
//   },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: 'linear',
//       repeat: Infinity,
//       repeatType: 'reverse'
//     }
//   }
// });

export default App;
