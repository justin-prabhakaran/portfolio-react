import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import "./App.css";
import { ReactTyped } from "react-typed";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import GitHubIcon from "./components/icons/GitHubIcon";
import FlutterTechIcon from "./components/tech-icons/FlutterTechIcon";
import DartTechIcon from "./components/tech-icons/DartTechIcon";
import JavaTechIcon from "./components/tech-icons/JavaTechIcon";
import PythonTechIcon from "./components/tech-icons/PythonTechIcon";
import CppTechIcon from "./components/tech-icons/CppTechIcon";
import ClangTechIcon from "./components/tech-icons/ClangTechIcon";
import TsTechIcon from "./components/tech-icons/TsTechIcon";
import NodeJsTechIcon from "./components/tech-icons/NodeJsTechIcon";
import MongoDBTechIcon from "./components/tech-icons/MongoDBTechIcon";
import MysqlTechIcon from "./components/tech-icons/MysqlTechIcon";
import ProjectContent from "./components/ProjectContent";
import EducationContent from "./components/EducationContent";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // const [isLinkedIconHovered, setLinkedIconHovered] = useState(false);
  // const [isGitHubIconHovered, setGitHubIconHovered] = useState(false);
  const [isEmailHovered, setEmailHovered] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.pageX,
        y: e.pageY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    'default': {
      top: mousePos.y - 15,
      left: mousePos.x - 15,
    },

    'text': {
      height: 100,
      width: 100,
      top: mousePos.y - 50,
      left: mousePos.x - 50
    }


  }

  return (
    <>
      <div className="App">
        {/* <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
          transition={{ ease: "backOut" }

          }
        >

        </motion.div> */}

        <div className={`cursor ${cursorVariant}`} style={variants[cursorVariant]}></div>

        <div className="nav-content">
          <ul className="nav-ul">
            <li className="nav-li"
              onMouseEnter={() => {
                setCursorVariant('text');
              }}

              onMouseLeave={() => {
                setCursorVariant('default')
              }}

            >about</li>
            <li className="nav-li"
              onMouseEnter={() => {
                setCursorVariant('text');
              }}

              onMouseLeave={() => {
                setCursorVariant('default')
              }}
            >projects</li>
            <li className="nav-li"


              onMouseEnter={() => {
                setCursorVariant('text');
              }}

              onMouseLeave={() => {
                setCursorVariant('default')
              }}>contact</li>
          </ul>
        </div>



        <div className="left-icons">
          <div className="icons">
            <div
              className="icon"

              onMouseEnter={() => {
                setCursorVariant("text");
                // setLinkedIconHovered(true);
              }}
              onMouseLeave={() => {
                setCursorVariant("default");
                // setLinkedIconHovered(false);
              }}
            >
              <LinkedInIcon />
            </div>
            <div
              className="icon"
              onMouseEnter={() => {
                setCursorVariant("text");
                // setGitHubIconHovered(true);
              }}
              onMouseLeave={() => {
                setCursorVariant("default");
                // setGitHubIconHovered(false);
              }}
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
            <motion.div
              variants={animationVariants(0.5)}
              initial='hidden'
              animate='show'
              id="hi-intro">Hi all. I am</motion.div>
            <motion.div
              variants={animationVariants(1)}
              initial='hidden'
              animate='show'
              onMouseEnter={
                () => {
                  setCursorVariant('text');
                }
              }
              onMouseLeave={
                () => {
                  setCursorVariant('default');
                }
              }
              id="name"
            >JUSTINPRABHAKARAN M</motion.div>
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
            <motion.p
              variants={animationVariants(1.5)}
              initial='hidden'
              animate='show' id="description">{description}</motion.p>
          </div>


          <div className="tech-content">
            <motion.h1
              initial={{
                x: -100,
                opacity: 0
              }}

              whileInView={{
                x: 0,
                opacity: 1
              }}

              transition={{ duration: 0.5, delay: 0.3 }}
              className="tech-heading">Technologies</motion.h1>
            <div className="tech-container">
              <div className="tech-icon flutter-tech-icon">
                <FlutterTechIcon />
              </div>
              <div className="tech-icon dart-tech-icon">
                <DartTechIcon />
              </div>
              <div className="tech-icon java-tech-icon">
                <JavaTechIcon />
              </div>
              <div className="tech-icon python-tech-icon">
                <PythonTechIcon />
              </div>
              <div className="tech-icon cpp-tech-icon">
                <CppTechIcon />
              </div>
              <div className="tech-icon clang-tech-icon">
                <ClangTechIcon />
              </div>
              <div className="tech-icon ts-tech-icon">
                <TsTechIcon />
              </div>
              <div className="tech-icon nodejs-tech-icon">
                <NodeJsTechIcon />
              </div>
              <div className="tech-icon mongodb-tech-icon">
                <MongoDBTechIcon />
              </div>
              <div className="tech-icon mysql-tech-icon">
                <MysqlTechIcon />
              </div>
            </div>
          </div>



          <EducationContent />

          <ProjectContent onMouseEnter={() => {
            setCursorVariant('text');
          }}
            onMouseLeave={() => {
              setCursorVariant('default');
            }}

          />


        </div>

      </div>
    </>
  );
}

const roles = ["Flutter Developer", "Java Developer", "Python Developer", "React Developer", "Cpp Developer", "Dart Developer"];
const description =
  "I am well-versed in several programming languages and frameworks, including Java, Python, Dart, Flutter, Node.js, C, and C++. With a passion for software development, I enjoy tackling challenges and crafting innovative solutions.";


const animationVariants = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5, delay: delay
    }
  }

});


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
