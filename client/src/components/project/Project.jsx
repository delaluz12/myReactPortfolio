
import './project.css'

export default function Project({img, link}) {
    return (
        <div className='project'>
            <div className="project-browser">
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
            </div>
            <a href={link} target="blank">
                <img src= {img} alt="" className="project-img" />
            </a>
        </div>
    )
}
