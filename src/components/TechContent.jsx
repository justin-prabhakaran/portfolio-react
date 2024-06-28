
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
import DocketIcon from '../assets/docker.svg'
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

    return (
        <div className="tech-content">
            <h1 className="tech-heading">Technologies</h1>
            <div className="tech-container">
                <div className="tech-icon-wrapper">
                    <div className="tech-icon flutter-tech-icon">
                        <TechIcon imageUrl={FlutterIcon} alt="flutter" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon dart-tech-icon">
                        <TechIcon imageUrl={DartIcon} alt="dart" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon java-tech-icon">
                        <TechIcon imageUrl={JavaIcon} alt="java" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon python-tech-icon">
                        <TechIcon imageUrl={PythonIcon} alt="python" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon cpp-tech-icon">
                        <TechIcon imageUrl={CppIcon} alt="cpp" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon clang-tech-icon">
                        <TechIcon imageUrl={ClangIcon} alt="clang" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon ts-tech-icon">
                        <TechIcon imageUrl={TsIcon} alt="ts" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon html-tech-icon">
                        <TechIcon imageUrl={HtmlIcon} alt="html" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon css-tech-icon">
                        <TechIcon imageUrl={CssIcon} alt="css" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon react-tech-icon">
                        <TechIcon imageUrl={ReactIcon} alt="react" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon nodejs-tech-icon">
                        <TechIcon imageUrl={NodeJsIcon} alt="nodejs" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon mongodb-tech-icon">
                        <TechIcon imageUrl={MongoDbIcon} alt="mongodb" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon mysql-tech-icon">
                        <TechIcon imageUrl={MysqlIcon} alt="mysql" />
                    </div>
                </div><div className="tech-icon-wrapper">
                    <div className="tech-icon vscode-tech-icon">
                        <TechIcon imageUrl={VscodeIcon} alt="vscode" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon git-tech-icon">
                        <TechIcon imageUrl={GitIcon} alt="git" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon socketio-tech-icon">
                        <TechIcon imageUrl={SocketIoIcon} alt="socket.io" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon ubuntu-tech-icon">
                        <TechIcon imageUrl={UbuntuIcon} alt="ubuntu" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon docker-tech-icon">
                        <TechIcon imageUrl={DocketIcon} alt="docker" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon postman-tech-icon">
                        <TechIcon imageUrl={PostmanIcon} alt="postman" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon figma-tech-icon">
                        <TechIcon imageUrl={FigmaIcon} alt="figma" />
                    </div>
                </div>
                <div className="tech-icon-wrapper">
                    <div className="tech-icon adobexd-tech-icon">
                        <TechIcon imageUrl={AdobeXd} alt="adobexd" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TechContent;
