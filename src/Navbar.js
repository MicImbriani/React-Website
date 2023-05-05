import React from 'react'



function Navbar() {
    return (
        <nav className='navbar'>
            <a href="/" className='site-title'>Site</a>
            <ul>
                <li className='active'>
                    <a href='/pricing'>Pricing</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar