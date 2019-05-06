import React from 'react';
import styled from 'styled-components';
import jag from './jag.png'

const MainWrap = styled.div`
    max-width: 1170px;
    padding: 4em 6em; 
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 8rem;
    height: auto; 

    @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 2em 1em;
    
    }
`

function Main() {
    return(
        <MainWrap className="fade-text">
            <div className="content">
                <h1 id="om-mig">Christoffer Rydeståhl</h1>
                <p className="text">Under många år satsade jag helhjärtat på musiken. Jag vår låtskrivare och sångare i ett band som hette Oholics. Tillsammans drev vi eget skivbolag, släppte två album och en ep, vi åkte på turneér runt om i Europa och Nordamerika. 
                Även om vi var världens bästa band var det tyvärr inte så många som förstod det, vilket fick mig att inse att jag kanske aldrig skulle bli någon yrkesmusiker.<br></br><br></br> 

                Under min tid i bandet jobbade jag extra som säljare i skobutiken Sneaky Steve på magasinsgatan i Göteborg. Här blev jag erbjuden en tjänst som butikschef vilket jag tackade ja till. 
    
                I min roll som butikschef ingick det bl a att skriva nyhetsbrev och annan användbar content som skulle användas på hemsidan eller i kampanjer. <br></br><br></br>

                Med tiden blev skrivandet en allt viktigare del i mitt arbete vilket ledde till att jag så småningom blev copywriter på Sneaky Steve. Jag började även att ta frilansuppdrag vid sidan av. <br></br><br></br>

                Genom just ett frilansuppdrag upptäckte jag programmeringens utlovade rike. I uppdraget ingick det att skriva artiklar som rörde tech-industrin. Detta var ett ämne som fullständigt golvade mig vilket ledde till att kvällar och helger gick åt till att bemästra grunderna i programmering. Till en början använde jag mig av tutorials på youtube för att lära mig, men gick senare vidare till kursplattformen Team Treehouse. <br></br><br></br>

                Via Sneaky Steve hade jag en kontakt på e-handelsföretaget Jetshop. För honom berättade jag om mitt nya intresse varpå jag fick ett erbjudande om att få praktisera hos dem.<br></br> <br></br>

                Hos Jetshop praktiserar jag nu som frontend-utvecklare. Praktiken startade december 2018 och avslutas sista maj detta året. 
                </p>
            </div>
            <div className="img">
                <img src={jag} id="jag" alt="Christoffer Rydeståhl"></img>
            </div>
        </MainWrap>
    )
}

export default Main; 