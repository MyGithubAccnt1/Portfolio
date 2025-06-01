import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navigation.css'
function Navigation() {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setToggle(true);
            } else {
                setToggle(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <nav className="relative p-4 flex justify-between items-center">
                <div className="lg:hidden">
                    <button onClick={() => setToggle(!toggle)} className="navbar-burger flex items-center text-blue-600 p-3">
                        {toggle ? (
                            <div className="burger">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        ) : (
                            <div className="exit">
                                <div></div>
                                <div></div>
                            </div>
                        )}
                    </button>
                </div>
                <ul className={`${toggle ? 'hidden' : 'block'} mx-auto gap-5 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}>
                    <li><Link className="text-sm text-blue-600 font-bold" to="/">Home</Link></li>
                    <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="/personal-data">Personal Data</Link></li>
                    <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </>
    )
  }
  
  export default Navigation
  