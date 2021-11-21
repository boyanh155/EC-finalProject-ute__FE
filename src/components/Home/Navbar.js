import {Link} from "react-router-dom"
import "../../assets/css/home/Hero.css"
import "../../assets/css/home/NavBar.css"
import { SlideBarData } from './SlideBarData'
import { useState } from 'react'

const Navbar = () => {
    // false is close
    const [slideBar,setSlideBar] = useState(false)
    const [menuDisPlay,setMenuDisPlay] = useState('Menu')
    const showSideBar=()=> {
        setSlideBar(!slideBar);
        setMenuDisPlay((prev)=>{
            if(prev==='Menu'){
                return 'Close';
            }
            else if(prev ==='Close'){
                return 'Menu';
            }
        })
    }
    return (
    <>  
        {/* Close */}
        <Link to='#' onClick={showSideBar} className={slideBar ?'hero__bt smooth inactiveMenu':'hero__bt smooth'}>
            <div>
                <span className="hero__bt__text" >{menuDisPlay}</span>
            </div>
        </Link>
        <nav className={slideBar ? ' nav-menu smooth' : 'nav-menu inactiveClose smooth'}>
            <ul className='nav-menu-list' >
                {SlideBarData.map((item,index)=>{
                    return(
                        <Link key={index} to={item.path} className='link'>
                            <li  className="nav-menu-item smooth">{item.title}</li>
                        </Link>
                    )
                })}
            </ul>
        </nav>

 
    </>

    )
}

export default Navbar
