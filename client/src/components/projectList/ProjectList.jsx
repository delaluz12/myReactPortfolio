
import "./projectList.css";
import { projects } from '../../data';


import Project from "../project/Project"


export default function ProjectList() {
    console.log(projects.map((item)=> {
        return item.img;
    }));
    
    return (
        <div className='pl'>
            <div className="pl-text">
                <h1 className="pl-title">Title Here</h1>
                <p className="pl-desc">
                    Quam impedit itaque consequuntur ducimus, corporis vitae eos maiores corrupti est, sequi a perferendis! 
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                   <Project key= {item.id} img={item.img} link={item.link}/> 
    ))}
                
                
            </div>
        </div>
    )
}
