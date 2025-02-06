/**
 * @copyright 2025 Anthony Lomax
 */

import NavBar from "./NavBar";
import { useState } from "react";

function Header () {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,auto,1fr]">

                {/* Site logo */}
                <h1>
                    <a
                    href="/"
                    className="logo"
                    >
                        <img 
                            src="/favicon/android-chrome-192x192.png"
                            width={40}
                            height={40}
                            alt="terminalLogo" 
                        />
                    </a>                
                </h1>

                {/* Hamburger collapsable menu */}
                <div className="relative me:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <NavBar navOpen={navOpen} />
                </div>

                {/* Contact shown depending on size */}
                <a 
                    href="#contact"
                    className="btn btn-secondary max-md:hidden md: justify-self-end"
                >
                    Contact Me
                </a>
            
            </div>
        </header>
    )
}

export default Header;