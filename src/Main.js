import React from 'react';
import styled from 'styled-components';
import jag from './jag.png'

const MainWrap = styled.div`
    max-width: 1170px;
    padding: 4em 6em; 
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 8rem;
    height: 450px; 

    @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding: 2em 1em;
    
    }
`

function Main() {
    return(
        <MainWrap>
            <div className="content">
                <h1 id="om-mig" className="hover">Christoffer Rydeståhl</h1>
                <p>Efter ett frilansuppdrag som copywriter upptäckte jag programmeringens utlovade rike - här vill jag stanna! <br></br> 
                Min bana som Frontend utvecklare startade för snart ett år sedan.<br></br>
                    <br></br>    
                    Idag praktiserar jag på Jetshop i Göteborg, där jag dagligen jobbar med JavaScript, HTML, CSS3, och Git. Praktiken avslutas i maj.<br></br>     
                    <br></br>    
                Jag tror att jag skulle kunna gör nytta hos er då jag är en stark idéspruta med possetiv energi och stor vilja att lära. Dessutom är min bakgrund som copywriter en passande egenskap i vårt contenttörstande samhälle. 
                </p>
            </div>
            <div className="img">
                <img src={jag} id="jag" alt="Christoffer Rydeståhl"></img>
            </div>
        </MainWrap>
    )
}

export default Main; 