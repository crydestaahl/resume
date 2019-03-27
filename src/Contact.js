import React from 'react'; 
import styled from 'styled-components';

const ContactWrap = styled.div`
    max-width: 1170px;
    padding: 2em 6em; 
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 8rem;
    
     @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 1em 2em;
    }
`
function Contact() {
    return(
        <ContactWrap>
            <div>
            <h1 id="contact"className="hover">Kontakta mig!</h1>
                <p>Om ni är sugna på att ses är det bara att ringa mig på <a href="tel:0736926360">0736926360</a>, eller varför inte dra iväg ett <a href="mailto: kristoffer@oholics.com">mail!</a></p>
            <h2 className="hover">Personuppgifter</h2>
            <p>Personnummer: 1986-04-27</p>
            <p>Sågliderna 15, 43854 Hindås</p>
            </div>
        </ContactWrap>
    )
}

export default Contact;