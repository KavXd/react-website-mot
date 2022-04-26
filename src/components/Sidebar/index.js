import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>
                    Contact Us
                </SidebarLink>
                <SidebarLink to='services' onClick={toggle}>
                    Services
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute><a href='https://sjmmot.bookingcommerce.com' target="_blank" rel="noopener noreferrer">Book Now</a></SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar