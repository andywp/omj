import React from 'react'
import Link from 'next/link'
import { Navbar, Dropdown, Nav, Form, Card, Image} from 'react-bootstrap'
//import Button from '@restart/ui/esm/Button'

const Header = () => {
   const minisidebar =() =>{
      document.body.classList.toggle('sidebar-main')
   }
   return (
      <>
         <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
               <Navbar expand="lg" variant="light" className="p-0">
                  <div className="iq-navbar-logo d-flex justify-content-between">
                     <Link href="/">
                        <a>
                        <Image src="/assets/images/logo.png" className="img-fluid" alt="OMG"/>
                        <span>OMG</span>
                        </a>
                     </Link>
                     <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu" onClick={minisidebar}>
                           <div className="main-circle">
                                 <i className="ri-menu-line"></i>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="iq-search-bar device-search">
                        <Form action="#" className="searchbox">
                           <Link className="search-link" href="#">
                              <a className='search-link' >
                                 <i className="ri-search-line"></i>
                              </a>
                           </Link>
                           <input type="text" className="text search-input" placeholder="Search here..."/>
                        </Form>
                  </div>
                  <Navbar.Toggle as="button">
                        <i className="ri-menu-3-line"></i>
                  </Navbar.Toggle>
                  <Nav as="ul" className="ms-auto navbar-list">
                     <Dropdown as="li" className="nav-item">
                        <Dropdown.Toggle href="/"  className="d-flex align-items-center" variant="search-toggle" data-bs-toggle="dropdown">
                              <i className="ri-home-line"></i>
                        </Dropdown.Toggle>
                     </Dropdown>
                     <Dropdown.Menu className="sub-drop sub-drop-large" aria-labelledby="group-drop">
                        <Card className="shadow-none m-0">
                           <Card.Header className="d-flex justify-content-between bg-primary">
                              <div className="header-title">
                                    <h5 className="mb-0 text-white">Friend Request</h5>
                              </div>
                              <small className="badge bg-light text-dark ">4</small>
                           </Card.Header>
                           <Card.Body className="p-0">
                              <Link href="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                 <a>
                                 <div className="d-flex align-items-center">
                                    <Image className="avatar-40 rounded" src="assets/images/user/1.jpg" alt=""/>
                                 </div>
                                 <div className="ms-3 w-100">
                                    <h6 className="mb-0 ">Emma Watson Bni</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                          <p className="mb-0">95 MB</p>
                                          <small className="float-right font-size-12">Just Now</small>
                                    </div>
                                 </div>
                                 </a>
                              </Link>
                              <Link href="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                               <a>
                                 <div className="d-flex align-items-center">
                                    <Image className="avatar-40 rounded" src="assets/images/user/02.jpg" alt=""/>
                                 </div>
                                 <div className="ms-3 w-100">
                                    <h6 className="mb-0 ">New Customer is join</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                          <p className="mb-0">Cyst Bni</p>
                                          <small className="float-right font-size-12">5 days ago</small>
                                    </div>
                                 </div>
                                 </a>
                              </Link>
                              <Link href="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                 <a>
                                 <div className="d-flex align-items-center">
                                    <Image className="avatar-40 rounded"  src="assets/images/user/03.jpg" alt=""/>
                                 </div>
                                 <div className="ms-3 w-100">
                                    <h6 className="mb-0 ">Two customer is left</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                          <p className="mb-0">Cyst Bni</p>
                                          <small className="float-right font-size-12">2 days ago</small>
                                    </div>
                                 </div>
                                 </a>
                              </Link>
                              <Link href="#" className="iq-sub-card d-flex align-items-center justify-content-between">
                                 <a>
                                 <div className="d-flex align-items-center">
                                    <Image className="avatar-40 rounded" src="assets/images/user/04.jpg" alt=""/>
                                 </div>
                                 <div className="ms-3 w-100">
                                    <h6 className="mb-0 ">New Mail from Fenny</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                          <p className="mb-0">Cyst Bni</p>
                                          <small className="float-right font-size-12">3 days ago</small>
                                    </div>
                                 </div>
                                 </a>
                              </Link>
                           </Card.Body>
                        </Card>
                     </Dropdown.Menu>
                  </Nav>
               </Navbar>
            </div>
         </div>
      </>
   )

}

export default Header