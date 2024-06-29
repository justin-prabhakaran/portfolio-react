
import './ProjectCard.css'
import propTypes from 'prop-types'
import GitHubIcon from './icons/GitHubIcon'

function ProjectCard({ title, imageSrc, description, skills, onMouseEnter, onMouseLeave, onClick }) {
    return (
        <div
            className='card'>
            <div className='image-container'>
                <img src={imageSrc} alt='Random Chat' className='image'></img>
            </div>
            <div className='card-content'>
                <div>
                    <h1 className='heading'>
                        {title}

                    </h1>
                    <p className='description'>{description}</p>
                </div>
                <div className="bottom-row">
                    <div className='skills'>
                        {
                            skills.map((skill, index) => (
                                <img className="skill" key={index} src={skill}></img>
                            ))
                        }

                    </div>
                    <div className="git-icon" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={
                        onClick
                    }>
                        <GitHubIcon />
                    </div>
                </div>
                {/* <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className='btn'>view project</button> */}
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    title: propTypes.string.isRequired,
    imageSrc: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    skills: propTypes.arrayOf(propTypes.string).isRequired,
    onClick: propTypes.func,
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func,
}



export default ProjectCard


