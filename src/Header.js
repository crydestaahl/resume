import React from 'react';
import styled from 'styled-components';

const NavWrap = styled.div`
    max-width: 1170px;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%; 
    position: fixed; 
    background: white; 
    z-index: 900;
    -webkit-box-shadow: 4px 3px 19px -5px rgba(130,130,130,1);
    -moz-box-shadow: 4px 3px 19px -5px rgba(130,130,130,1);
    box-shadow: 4px 3px 19px -5px rgba(130,130,130,1);

     @media screen and (max-width: 1069px) {
        display: none;
        text-align: center;
        width: 100%;
        align-items: center;
    }
`
const Navbar = styled.ul`
    grid-column-start: 2;
    grid-column-end: 2; 
    list-style: none;

`

const Li = styled.li`
    display: inline; 
    margin: 0 2em;

    @media screen and (max-width: 400px) {
        padding: 1em 0;
        text-align: center;
        display: block;
    }
`




function Header() {
    return(
        <NavWrap>
            <Navbar>
                <Li><a href="#om-mig">Om mig</a></Li>
                <Li><a href="#cv">CV</a></Li>
                <Li><a href="#contact">Kontakt</a></Li>
            </Navbar>
        </NavWrap>
    )
}
export default Header; 