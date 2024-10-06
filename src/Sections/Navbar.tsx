import { useState } from 'react';

export default function Navbar(): JSX.Element{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav>
            <ul>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href="/" className='text-4xl font-bold'>NeuroStyl</a>
                    <button onClick={toggleMenu} className="block md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className={isOpen ? "block" : "hidden"}>
                    <a href="#">About</a>
                </div>
                <div className={isOpen ? "block" : "hidden"}>
                    <a href="#">Contact</a>
                </div>
            </ul>
        </nav>
    )   }