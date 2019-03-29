import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
    max-width: 1170px;
    padding: 1em 6em; 
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 8rem;

    @media screen and (max-width: 450px) {
        display: flex;
        flex-direction: column;
        margin-top: 0;
        padding: 4em 2em;
        }

    @media screen and (max-width: 874px) {
        margin-top: 44px;
    }    
            
`

function Cv() {
    return(
        <div>        
        <Resume>
                <h1 className="title">CV</h1><br></br>    
                <div className="cv">                                
                    <p><strong><h2 className="hover">Jetshop, Göteborg</h2></strong><h4 className="hover">Praktik: Frontend utvecklare
                        december 2018 – pågående</h4>
                        Här jobbar jag dagligen med Javascript, jQuery, CSS, Sass och html.<br></br><br></br> 
                        <strong><h2 className="hover">Demando, distans</h2></strong><h4 className="hover">Copywriter
                        maj 2018 - pågående</h4>
                        Som skribent för Demandos blogg håller jag mig uppdaterad med allt det senaste inom tech. 
                        <strong><h2 className="hover">Sneaky Steve, Göteborg</h2></strong><h4 className="hover"> Copywriter
                        maj 2017 - april 2019</h4>
                        Här har jag skrivit allt från annonstexter till nyhetsbrev och kollektions koncept.
                        <strong><h2 className="hover">Sneaky Steve, Landvetter flygplats</h2></strong>  <h4 className="hover">Store Manager 2016 - augusti 2018</h4>
                        Här hade jag ansvar för butik och personal.
                        </p><br></br>        
                    </div>    
                    <div className="right">                                               
                        <h2 id="sprak" className="hover">Språk och tekniker jag behärskar</h2><br></br>    
                            <img className="logo" src="https://cdn.worldvectorlogo.com/logos/html-5.svg" alt="html5"></img>
                            <img className="logo" src="https://cdn.worldvectorlogo.com/logos/css-5.svg" alt="css3"></img>
                            <img className="logo"src="https://cdn.worldvectorlogo.com/logos/javascript-4.svg" alt="js"></img>
                            <img className="logo react" src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="react"></img>
                    </div>                        
            </Resume>    
        </div>
    )
}

export default Cv; 