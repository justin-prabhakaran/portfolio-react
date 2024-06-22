
import './ProjectCard.css'
function ProjectCard({ title, imageSrc, onClick, onMouseEnter, onMouseLeave }) {
    return (
        <div
            className='card'>
            <div className='image-container'>
                <img src={imageSrc} alt='Random Chat' className='image'></img>
            </div>
            <div className='card-content'>
                <h1 className='heading'>
                    {title}
                </h1>
                <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className='btn'>view project</button>
            </div>
        </div>
    )
}

export default ProjectCard


