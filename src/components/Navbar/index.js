import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        Events
                    </NavLink>
                    <NavLink to='/ilovebabe' activeStyle>
                        ILoveBabe
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in' activeStyle>
                        Sign In
                    </NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;