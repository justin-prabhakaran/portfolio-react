import FlutterTechIcon from "./tech-icons/FlutterTechIcon";
import DartTechIcon from "./tech-icons/DartTechIcon";
import JavaTechIcon from "./tech-icons/JavaTechIcon";
import PythonTechIcon from "./tech-icons/PythonTechIcon";
import CppTechIcon from "./tech-icons/CppTechIcon";
import ClangTechIcon from "./tech-icons/ClangTechIcon";
import TsTechIcon from "./tech-icons/TsTechIcon";
import NodeJsTechIcon from './tech-icons/NodeJsTechIcon';
import MongoDBTechIcon from "./tech-icons/MongoDBTechIcon";
import MysqlTechIcon from "./tech-icons/MysqlTechIcon";

import './TechContent.css';
import { useEffect } from "react";

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
    );
}

export default TechContent;
