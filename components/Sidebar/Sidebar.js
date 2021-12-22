import React, {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'

function CustomToggle({ children, eventKey, onClick }) {

   const { activeEventKey } = useContext(AccordionContext);

   const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

   const isCurrentEventKey = activeEventKey === eventKey;
 
   return (
     <Link href="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
       decoratedOnClick(isCurrentEventKey)
     }}>
        <a>
         {children}
        </a>
      
     </Link>
   );
 }

const Sidebar = () => {
   useEffect(
      () =>{
          Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
   })

   const [activeMenu, setActiveMenu] = useState(false)
   let location = useRouter();
      return (
            <>
               <div className="iq-sidebar">
                  <div id="sidebar-scrollbar">
                     <nav className="iq-sidebar-menu">
                        <Accordion as="ul" id="iq-sidebar-toggle" className="iq-menu">
                           <li className={`${location.pathname === '/' ? 'active' : ''} `}>
                              <Link href="/" ><a><i class="las la-home"></i><span>Dashboard</span></a></Link>
                           </li>
                           <Accordion.Item as="li" className={`${location.pathname === '/dashboards/profiles/profile1' || location.pathname === '/dashboards/profiles/profile2' || location.pathname === '/dashboards/profiles/profile3' ?  'active' : ''}`} eventKey="sidebar-profiles"  >
                              <CustomToggle eventKey="sidebar-profiles" onClick={(activeKey) => setActiveMenu(activeKey)}>
                                    <i className="lab la-blogger"></i>
                                    <span>Widget</span>
                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                              </CustomToggle>
                              <Accordion.Collapse eventKey="sidebar-profiles">
                                 <ul id="profiles" className="iq-submenu " >
                                    <li className={`${location.pathname === '/dashboards/profiles/profile1' ? 'active' : ''}`}>
                                       <Link href="/dashboards/profiles/profile1">
                                          <a>
                                          <i className="ri-grid-line"></i>Widget
                                          </a>
                                       </Link>
                                    </li>
                                    <li className={`${location.pathname === '/dashboards/profiles/profile2' ? 'active' : ''}`}>
                                       <Link href="/dashboards/profiles/profile2">
                                          <a>
                                          <i className="ri-list-check-2"></i>Overlay
                                          </a>
                                       </Link>
                                    </li>
                                 </ul>
                              </Accordion.Collapse>
                           </Accordion.Item>
                           <li className={`${location.pathname === '/balance' ? 'active' : ''} `}>
                              <Link href="/balance" ><a><i class="las la-wallet"></i><span>Balance</span></a></Link>
                           </li>
                           <li className={`${location.pathname === '/balance' ? 'active' : ''} `}>
                              <Link href="/goal" ><a><i class="las la-radiation"></i><span>Goal</span></a></Link>
                           </li>
                           <li className={`${location.pathname === '/balance' ? 'active' : ''} `}>
                              <Link href="/account-setting" ><a><i class="las la-user"></i><span>Account Setting</span></a></Link>
                           </li>
                        </Accordion>
                        
                     </nav>
                  </div>
               </div>
            </>
      )
}

export default Sidebar
