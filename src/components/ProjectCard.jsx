
import './ProjectCard.css'
function ProjectCard({ title, imageSrc }) {
    return (
        <div
            className='card'>
            <div className='image-container'>
                <img src={imageSrc} alt='Random Chat' className='image'></img>
            </div>
            <div className='card-content'>
                <text className='heading'>
                    {title}
                </text>
                <button className='btn'>view project</button>
            </div>
        </div>
    )
}

export default ProjectCard


