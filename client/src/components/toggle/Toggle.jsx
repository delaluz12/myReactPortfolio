import './toggle.css';
import {BsSunFill, BsFillMoonFill} from 'react-icons/bs'
import { ThemeContext } from '../../context';
import {useContext} from 'react'


export default function Toggle() {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type : "TOGGLE"})
    }
    return (
        <div className='toggle'>
            <BsSunFill className="toggle-icon" color='orange' />
            <BsFillMoonFill className="toggle-icon" color='grey' />
            
            <div className="toggle-btn" onClick={handleClick} style={{left: theme.state.darkMode ? "25px": "0px"}}></div>
        </div>
    )
}
