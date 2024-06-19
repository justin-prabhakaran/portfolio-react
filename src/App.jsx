import { useEffect, useState } from "react";
// import { motion } from 'framer-motion';
import "./App.css";
import { ReactTyped } from "react-typed";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import GitHubIcon from "./components/icons/GitHubIcon";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // const [isLinkedIconHovered, setLinkedIconHovered] = useState(false);
  // const [isGitHubIconHovered, setGitHubIconHovered] = useState(false);
  const [isEmailHovered, setEmailHovered] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
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
            <div id="hi-intro">Hi all. I am</div>
            <div
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
        </div>

      </div>
    </>
  );
}

const roles = ["Flutter Developer", "Java Developer", "Python Developer", "React Developer", "Cpp Developer", "Dart Developer"];
const description =
  "I am well-versed in several programming languages and frameworks, including Java, Python, Dart, Flutter, Node.js, C, and C++. With a passion for software development, I enjoy tackling challenges and crafting innovative solutions.";

export default App;
