import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Associated Links</FooterLinkTitle>
                            <FooterLink>
                                <a href='https://www.eurocarparts.com/'>Eurocarparts</a>
                            </FooterLink>
                            <FooterLink>
                                <a href='https://gdpr-info.eu/'>GDPR</a>
                            </FooterLink>
                            <FooterLink>
                                <a href='https://www.gov.uk/check-mot-status'>MOT Status</a>
                            </FooterLink>
                            <FooterLink>
                                <a href='https://www.gov.uk/data-protection'>Data Protection Act</a>
                            </FooterLink>
                            <FooterLink>
                            <a href='https://www.facebook.com/sjmotcentre/'>Facebook</a>
                            </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer