import FlutterIcon from '../assets/flutter.svg'
import DartIcon from '../assets/dart.svg'
import JavaIcon from '../assets/java.svg'
import PythonIcon from '../assets/python.svg'
import CppIcon from '../assets/cpp.svg'
import ClangIcon from '../assets/clang.svg'
import HtmlIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import ReactIcon from '../assets/react.svg'
import NodeJsIcon from '../assets/nodejs.svg'
import MongoDbIcon from '../assets/mongodb.svg'
import MysqlIcon from '../assets/mysql.svg'
import VscodeIcon from '../assets/vscode.svg'
import GitIcon from '../assets/git.svg'
import SocketIoIcon from '../assets/socketio.svg'
import UbuntuIcon from '../assets/ubuntu.svg'
import DockerIcon from '../assets/docker.svg'
import PostmanIcon from '../assets/postman.svg'
import FigmaIcon from '../assets/figma.svg'
import AdobeXd from '../assets/adobexd.svg'
import TsIcon from '../assets/ts.svg'
import './TechContent.css';
import { useEffect } from "react";
import TechIcon from "./icons/TechIcon";

function TechContent() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.5 });

        const techHeading = document.querySelector('.tech-heading');
        const techContainer = document.querySelector('.tech-container');

        if (techHeading) {
            observer.observe(techHeading);
        }
        if (techContainer) {
            observer.observe(techContainer);
        }

        return () => {
            if (techHeading) {
                observer.unobserve(techHeading);
            }
            if (techContainer) {
                observer.unobserve(techContainer);
            }
        }
    }, []);

    const generateRandomDuration = () => `${(Math.random() * 5 + 1).toFixed(2)}s`;

    const techIcons = [
        { imageUrl: FlutterIcon, alt: "flutter" },
        { imageUrl: DartIcon, alt: "dart" },
        { imageUrl: JavaIcon, alt: "java" },
        { imageUrl: PythonIcon, alt: "python" },
        { imageUrl: CppIcon, alt: "cpp" },
        { imageUrl: ClangIcon, alt: "clang" },
        { imageUrl: TsIcon, alt: "ts" },
        { imageUrl: HtmlIcon, alt: "html" },
        { imageUrl: CssIcon, alt: "css" },
        { imageUrl: ReactIcon, alt: "react" },
        { imageUrl: NodeJsIcon, alt: "nodejs" },
        { imageUrl: MongoDbIcon, alt: "mongodb" },
        { imageUrl: MysqlIcon, alt: "mysql" },
        { imageUrl: VscodeIcon, alt: "vscode" },
        { imageUrl: GitIcon, alt: "git" },
        { imageUrl: SocketIoIcon, alt: "socket.io" },
        { imageUrl: UbuntuIcon, alt: "ubuntu" },
        { imageUrl: DockerIcon, alt: "docker" },
        { imageUrl: PostmanIcon, alt: "postman" },
        { imageUrl: FigmaIcon, alt: "figma" },
        { imageUrl: AdobeXd, alt: "adobexd" },
    ];

    return (
        <div className="tech-content">
            <h1 className="tech-heading">Technologies</h1>
            <div className="tech-container">
                {techIcons.map((icon, index) => (
                    <div key={index} className="tech-icon-wrapper">
                        <div className="tech-icon" style={{ animationDuration: generateRandomDuration() }}>
                            <TechIcon imageUrl={icon.imageUrl} alt={icon.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechContent;
