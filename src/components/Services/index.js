import React from 'react'
import Icon1 from '../../images/mot.png'
import Icon2 from '../../images/repair.png'
import Icon3 from '../../images/diag.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>MOTs</ServicesH2>
            <ServicesP>The MOT classes that are avaible at SJMOTs are class 4 and 7 </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Repairs</ServicesH2>
            <ServicesP>Can do a wide variety of car repairs on a range of vehicles from cars to vans. </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Diagnostics</ServicesH2>
            <ServicesP>Diagnostics can be performed easily at SJMOTs with all top pof the line equipments.</ServicesP>
        </ServicesCard>
    </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services