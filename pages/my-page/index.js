import React,{useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {Row, Col, Container, Dropdown, Nav, Tab, OverlayTrigger, Tooltip, Button, Modal } from 'react-bootstrap'
import Card from '../../components/Card'
import styles from '../../styles/Home.module.css'
import Meta from '../../components/Meta'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Link from 'next/link'

const g1 = '../../../assets/images/page-img/g1.jpg';
const g2 = '../../../assets/images/page-img/g2.jpg';
const g3 = '../../../assets/images/page-img/g3.jpg';
const g4 = '../../../assets/images/page-img/g4.jpg';
const g5 = '../../../assets/images/page-img/g5.jpg';
const g6 = '../../../assets/images/page-img/g6.jpg';
const g7 = '../../../assets/images/page-img/g7.jpg';
const g8 = '../../../assets/images/page-img/g8.jpg';
const g9 = '../../../assets/images/page-img/g9.jpg';

const img9 = '../../../assets/images/page-img/07.jpg';
const img10 = '../../../assets/images/page-img/06.jpg';

const user1  =  '../../../assets/images/user/1.jpg';
const user05 = '../../../assets/images/user/05.jpg';
const user01 = '../../../assets/images/user/01.jpg';
const user02 = '../../../assets/images/user/02.jpg';
const user03 = '../../../assets/images/user/03.jpg';
const user06 = '../../../assets/images/user/06.jpg';
const user07 = '../../../assets/images/user/07.jpg';
const user08 = '../../../assets/images/user/08.jpg';
const user09 = '../../../assets/images/user/09.jpg';
const user10 = '../../../assets/images/user/10.jpg';
const user13 = '../../../assets/images/user/13.jpg';
const user14 = '../../../assets/images/user/14.jpg';
const user15 = '../../../assets/images/user/15.jpg';
const user16 = '../../../assets/images/user/16.jpg';
const user17 = '../../../assets/images/user/17.jpg';
const user18 = '../../../assets/images/user/18.jpg';
const user19 = '../../../assets/images/user/19.jpg';

const loader  ; '../../../assets/images/page-img/page-load-loader.gif';
const small07 ; '../../../assets/images/small/07.png';
const small08 ; '../../../assets/images/small/08.png';
const small09 ; '../../../assets/images/small/09.png';
const small1 = '../../../assets/images/small/07.png';
const small2 = '../../../assets/images/small/08.png';
const small3 = '../../../assets/images/small/09.png';
const small4 = '../../../assets/images/small/10.png';
const small5 = '../../../assets/images/small/11.png';
const small6 = '../../../assets/images/small/12.png';
const small7 = '../../../assets/images/small/13.png';
const small8 = '../../../assets/images/small/14.png';
const user9 = '../../../assets/images/user/1.jpg';
const img51 = '../../../assets/images/page-img/51.jpg';
const img52 = '../../../assets/images/page-img/52.jpg';
const img53 = '../../../assets/images/page-img/53.jpg';
const img54 = '../../../assets/images/page-img/54.jpg';
const img55 = '../../../assets/images/page-img/55.jpg';
const img56 = '../../../assets/images/page-img/56.jpg';
const img57 = '../../../assets/images/page-img/57.jpg';
const img58 = '../../../assets/images/page-img/58.jpg';
const img59 = '../../../assets/images/page-img/59.jpg';
const img60 = '../../../assets/images/page-img/60.jpg';
const img61 = '../../../assets/images/page-img/61.jpg';
const img62 = '../../../assets/images/page-img/62.jpg';
const img64 = '../../../assets/images/page-img/64.jpg';
const img65 = '../../../assets/images/page-img/65.jpg';
const img63 = '../../../assets/images/page-img/63.jpg';


export default function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Meta />
      <div className="wrapper">
        <Sidebar />
        <Header />
        <div id="content-page" className="content-page">
          <Container>
            <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="card p-0">
                     <div className="card-body p-0">
                        <div className="user-tabing">
                           <Nav as="ul" variant="pills" className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0 ">
                                 <Nav.Link  href="#pills-timeline-tab"  eventKey="first" role="button" className=" text-center p-3">Timeline</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-about-tab" eventKey="second" role="button" className="text-center p-3">About</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-friends-tab"  eventKey="third" role="button" className="text-center p-3">Friends</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-photos-tab"  eventKey="forth" role="button" className="text-center p-3">Photos</Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>
                     </div>
                  </div>
                  <Col sm={12}>
                     <Tab.Content>
                        <Tab.Pane eventKey="first" >
                           <Card.Body className=" p-0">
                              <Row>
                                 <Col lg={4}>
                                    <div className="card">
                                       <div className="card-body">
                                          <Link href="#"><span className="badge badge-pill bg-primary font-weight-normal ms-auto me-1"><i className="ri-star-line"></i></span> 27 Items for yoou</Link>
                                       </div>
                                    </div>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Life Event</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link href="#"> Create </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body >
                                          <Row>
                                             <Col sm={12}>
                                                <div className="event-post position-relative">
                                                   <Link href="#"><img src={img9} alt="gallary1" className="img-fluid rounded"/></Link>
                                                   <div className="job-icon-position">
                                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle"><i className="ri-briefcase-line text-white"></i></div>
                                                   </div>
                                                   <div className="card-body text-center p-2">
                                                      <h5>Started New Job at Apple</h5>
                                                      <p>January 24, 2019</p>
                                                   </div>
                                                </div>
                                             </Col>
                                             <Col sm={12}>
                                                <div className="event-post position-relative">
                                                   <Link href="#"><img src={img10} alt="gallary1" className="img-fluid rounded"/></Link>
                                                   <div className="job-icon-position">
                                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle"><i className="ri-briefcase-line text-white"></i></div>
                                                   </div>
                                                   <div className="card-body text-center p-2">
                                                      <h5>Freelance Photographer</h5>
                                                      <p className="mb-0">January 24, 2019</p>
                                                   </div>
                                                </div>
                                             </Col>
                                          </Row>
                                       </Card.Body>
                                    </Card>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Photos</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link href="#">Add Photo </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                             <li><Link href="#"><img src={g1} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g2} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g3} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g4} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g5} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g6} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g7} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g8} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link href="#"><img src={g9} alt="gallary" className="img-fluid" /></Link></li>
                                          </ul>
                                       </Card.Body>
                                    </Card>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Friends</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link to="javacsript:void();">Add New </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                             <li>
                                                <Link href="#">
                                                <img src={user05} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Anna Rexia</h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user06} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Tara Zona</h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user07} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Polly Tech</h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user08} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Bill Emia</h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user09} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Moe Fugga</h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user10} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Hal Appeno </h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user07} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Zack Lee</h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user06} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Terry Aki</h6>
                                             </li>
                                             <li>
                                                <Link href="#"><img src={user05} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Greta Life</h6>
                                             </li>
                                          </ul>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                                 <Col lg={8}>
                                    <Card id="post-modal-data" >
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Create Post</h4>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="d-flex align-items-center">
                                             <div className="user-img">
                                                <img src={user1} alt="userimg" className="avatar-60 rounded-circle"/>
                                             </div>
                                             <form className="post-text ms-3 w-100 " onClick={handleShow}>
                                                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                             </form>
                                          </div>
                                          <hr/>
                                          <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src={small07} alt="icon" className="img-fluid me-2"/> Photo/Video</li>
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src={small08} alt="icon" className="img-fluid me-2"/> Tag Friend</li>
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3"><img src={small09} alt="icon" className="img-fluid me-2"/> Feeling/Activity</li>
                                                <li className="bg-soft-primary rounded p-2 pointer text-center">
                                                   <div className="card-header-toolbar d-flex align-items-center">
                                                      <Dropdown>
                                                         <Dropdown.Toggle as={CustomToggle}  id="post-option"  >
                                                            <i className="ri-more-fill h4"></i>
                                                         </Dropdown.Toggle>
                                                         <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="post-option" >
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Check in</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Live Video</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Gif</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Watch Party</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Play with Friend</Dropdown.Item>
                                                         </Dropdown.Menu>
                                                      </Dropdown>
                                                   </div>
                                                </li>
                                          </ul>
                                       </Card.Body>
                                       <Modal show={show} onHide={handleClose} size="lg">
                                        <Modal.Header className="d-flex justify-content-between">
                                            <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                            <button type="button" className="btn btn-secondary"  onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img">
                                                    <img src={img5} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                                </div>
                                                <form className="post-text ms-3 w-100" action="">
                                                    <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: "none"}}/>
                                                </form>
                                            </div>
                                            <hr/>
                                            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small1} alt="icon" className="img-fluid"/> Photo/Video</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small2} alt="icon" className="img-fluid"/> Tag Friend</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small3} alt="icon" className="img-fluid"/> Feeling/Activity</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small4} alt="icon" className="img-fluid"/> Check in</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small5} alt="icon" className="img-fluid"/> Live Video</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small6} alt="icon" className="img-fluid"/> Gif</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small7} alt="icon" className="img-fluid"/> Watch Party</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link href="#"></Link><img src={small8} alt="icon" className="img-fluid"/> Play with Friends</div>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <div className="other-option">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-img me-3">
                                                            <img src={user9} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                                        </div>
                                                        <h6>Your Story</h6>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                                                <span className="btn btn-primary">Friend</span>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu clemassName="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Public</h6>
                                                                            <p className="mb-0">Anyone on or off Facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Friends</h6>
                                                                            <p className="mb-0">Your Friend on facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-user-unfollow-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Friends except</h6>
                                                                            <p className="mb-0">Don't show to some friends</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Only Me</h6>
                                                                            <p className="mb-0">Only me</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant="primary" className="d-block w-100 mt-3">Post</Button>
                                        </Modal.Body>
                                    </Modal>
                                    </Card>
                                    <Card>
                                       <Card.Body>
                                          <div className="post-item">
                                             <div className="user-post-data pb-3">
                                                <div className="d-flex justify-content-between">
                                                   <div className="me-3">
                                                      <img className="rounded-circle  avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between flex-wrap">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block"><Link href="#">Bni Cyst</Link></h5>
                                                            <p className="ms-1 mb-0 d-inline-block">Add New Post</p>
                                                            <p className="mb-0">3 hour ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                                  <i className="ri-more-fill"></i>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Notifications</h6>
                                                                           <p className="mb-0">Turn on notifications for this post</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="user-post">
                                                <Link href="#"><img src={p1} alt="post" className="img-fluid w-100" /></Link>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                  140 Likes
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                     <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                      <div className="total-comment-block">
                                                      <Dropdown>
                                                         <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                         20 Comment
                                                         </Dropdown.Toggle>
                                                         <Dropdown.Menu>
                                                            <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                            <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                         </Dropdown.Menu>
                                                      </Dropdown>
                                                      </div>
                                                   </div>
                                                <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link href="#"><i className="ri-link me-3"></i></Link>
                                                      <Link href="#"><i className="ri-user-smile-line me-3"></i></Link>
                                                      <Link href="#"><i className="ri-camera-line me-3"></i></Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                          <div className="post-item">
                                             <div className="user-post-data py-3">
                                                <div className="d-flex  justify-content-between">
                                                   <div className="me-3">
                                                      <img className="rounded-circle  avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block me-1"><Link href="#">Bni Cyst</Link></h5>
                                                            <p className="mb-0 d-inline-block">Share Anna Mull's Post</p>
                                                            <p className="mb-0">5 hour ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                                  <i className="ri-more-fill"></i>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Notifications</h6>
                                                                           <p className="mb-0">Turn on notifications for this post</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="user-post">
                                                <Link href="#"><img src={p3} alt="post" className="img-fluid w-100" /></Link>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                  140 Likes
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                     <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                      <div className="total-comment-block">
                                                         <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                               20 Comment
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                               <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                         </Dropdown>
                                                      </div>
                                                   </div>
                                                   <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link href="#"><i className="ri-link me-3"></i></Link>
                                                      <Link href="#"><i className="ri-user-smile-line me-3"></i></Link>
                                                      <Link href="#"><i className="ri-camera-line me-3"></i></Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                          <div className="post-item">
                                             <div className="user-post-data py-3">
                                                <div className="d-flex justify-content-between">
                                                   <div className="me-3">
                                                      <img className="rounded-circle avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block"><Link href="#">Bni Cyst</Link></h5>
                                                            <p className="ms-1 mb-0 d-inline-block">Update his Status</p>
                                                            <p className="mb-0">7 hour ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                                  <i className="ri-more-fill"></i>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className="p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Notifications</h6>
                                                                           <p className="mb-0">Turn on notifications for this post</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="user-post">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                               140 Likes
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                     <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                            </div>
                                                         </div>
                                                         <div className="total-comment-block">
                                                         <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                               20 Comment
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                               <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                               <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                      </Dropdown>
                                                      </div>
                                                   </div>
                                                   <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link href="#"><i className="ri-link me-3"></i></Link>
                                                      <Link href="#"><i className="ri-user-smile-line me-3"></i></Link>
                                                      <Link href="#"><i className="ri-camera-line me-3"></i></Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                          <div className="post-item">
                                             <div className="user-post-data py-3">
                                                <div className="d-flex justify-content-between">
                                                   <div className=" me-3">
                                                      <img className="rounded-circle avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block me-1"><Link href="#">Bni Cyst</Link></h5>
                                                            <p className=" mb-0 d-inline-block">Change Profile Picture</p>
                                                            <p className="mb-0">3 day ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                                  <i className="ri-more-fill"></i>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" href="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Notifications</h6>
                                                                           <p className="mb-0">Turn on notifications for this post</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="user-post text-center">
                                                <Link href="#"><img src={p1} alt="post" className="img-fluid profile-img" /></Link>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                                  <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                     140 Likes
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu>
                                                                     <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                               </div>
                                                         </div>
                                                         <div className="total-comment-block">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                  20 Comment
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                  <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                  <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                  <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                  <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                  <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                  <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                  <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                         </Dropdown>
                                                         </div>
                                                   </div>
                                                <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link href="#">like</Link>
                                                               <Link href="#">reply</Link>
                                                               <Link href="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link href="#"><i className="ri-link me-3"></i></Link>
                                                      <Link href="#"><i className="ri-user-smile-line me-3"></i></Link>
                                                      <Link href="#"><i className="ri-camera-line me-3"></i></Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="second">
                           <Tab.Container id="left-tabs-example" defaultActiveKey="about1">
                              <Card>
                                 <Card.Body>
                                    <Row>
                                       <Col md={3}>
                                          <Nav variant="pills"  className=" basic-info-items list-inline d-block p-0 m-0">
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about1">Contact and Basic Info</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about2">Family and Relationship</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about3">Work and Education</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about4">Places You've Lived</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about5">Details About You</Nav.Link>
                                             </Nav.Item>
                                          </Nav>
                                       </Col>
                                       <Col md={9} className=" ps-4">
                                          <Tab.Content >
                                             <Tab.Pane eventKey="about1">
                                                <h4>Contact Information</h4>
                                                <hr/>
                                                <Row>
                                                   <div className="col-3">
                                                      <h6>Email</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Bnijohn@gmail.com</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>Mobile</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">(001) 4544 565 456</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>Address</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">United States of America</p>
                                                   </div>
                                                </Row>
                                                <h4 className="mt-3">Websites and Social Links</h4>
                                                <hr/>
                                                <div className="row">
                                                   <div className="col-3">
                                                      <h6>Website</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">www.bootstrap.com</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>Social Link</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">www.bootstrap.com</p>
                                                   </div>
                                                </div>
                                                <h4 className="mt-3">Basic Information</h4>
                                                <hr/>
                                                <Row>
                                                   <div className="col-3">
                                                      <h6>Birth Date</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">24 January</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>Birth Year</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">1994</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>Gender</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Female</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>interested in</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Designing</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>language</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">English, French</p>
                                                   </div>
                                                </Row>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about2">
                                                <h4 className="mb-3">Relationship</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><i className="ri-add-fill"></i></div>
                                                      <div className="media-support-info ms-3">
                                                         <h6>Add Your Relationship Status</h6>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mt-3 mb-3">Family Members</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><i className="ri-add-fill"></i></div>
                                                      <div className="media-support-info ms-3">
                                                         <h6>Add Family Members</h6>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img src={user01} alt="story1" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Paul Molive</h6>
                                                               <p className="mb-0">Brothe</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex justify-content-between mb-4  align-items-center">
                                                      <div className="user-img img-fluid"><img src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className=" ms-3">
                                                               <h6>Anna Mull</h6>
                                                               <p className="mb-0">Sister</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img src={user03} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Paige Turner</h6>
                                                               <p className="mb-0">Cousin</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about3">
                                                <h4 className="mb-3">Work</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex justify-content-between mb-4  align-items-center">
                                                      <div className="user-img img-fluid"><i className="ri-add-fill"></i></div>
                                                      <div className="ms-3">
                                                         <h6>Add Work Place</h6>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Themeforest</h6>
                                                               <p className="mb-0">Web Designer</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>iqonicdesign</h6>
                                                               <p className="mb-0">Web Developer</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img src={user03} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>W3school</h6>
                                                               <p className="mb-0">Designer</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mb-3">Professional Skills</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><i className="ri-add-fill"></i></div>
                                                      <div className="ms-3">
                                                         <h6>Add Professional Skills</h6>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mt-3 mb-3">College</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><i className="ri-add-fill"></i></div>
                                                      <div className="ms-3">
                                                         <h6>Add College</h6>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><img src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Lorem ipsum</h6>
                                                               <p className="mb-0">USA</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about4">
                                                <h4 className="mb-3">Current City and Hometown</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Georgia</h6>
                                                               <p className="mb-0">Georgia State</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Atlanta</h6>
                                                               <p className="mb-0">Atlanta City</p>
                                                            </div>
                                                            <div className="edit-relation"><Link href="#"><i className="ri-edit-line me-2"></i>Edit</Link></div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mt-3 mb-3">Other Places Lived</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><i className="ri-add-fill"></i></div>
                                                      <div className="ms-3">
                                                         <h6>Add Place</h6>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about5">
                                                <h4 className="mb-3">About You</h4>
                                                <p>Hi, I’m Bni, I’m 26 and I work as a Web Designer for the iqonicdesign.</p>
                                                <h4 className="mt-3 mb-3">Other Name</h4>
                                                <p>Bini Rock</p>
                                                <h4 className="mt-3 mb-3">Favorite Quotes</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                             </Tab.Pane>
                                          </Tab.Content>
                                       </Col>
                                    </Row>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="third" >
                           <Tab.Container id="left-tabs-example" defaultActiveKey="all-friends">
                              <Card>
                                 <Card.Body>
                                    <h2>Friends</h2>
                                    <div className="friend-list-tab mt-2">
                                       <Nav variant="pills" className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                                          <Nav.Item>
                                             <Nav.Link  href="#pill-all-friends" eventKey="all-friends">All Friends</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-recently-add" eventKey="recently-add">Recently Added</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-closefriends" eventKey="closefriends"> Close friends</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-home" eventKey="home-town"> Home/Town</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-following" eventKey="following">Following</Nav.Link>
                                          </Nav.Item>
                                       </Nav>
                                       <Tab.Content>
                                          <Tab.Pane eventKey="all-friends">
                                             <Card.Body className="p-0">
                                                <Row>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                               <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Petey Cruiser</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Anna Sthesia</h5>
                                                                  <p className="mb-0">50  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paul Molive</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Gail Forcewind</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paige Turner</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>b Frapples</h5>
                                                                  <p className="mb-0">6  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user13} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Walter Melon</h5>
                                                                  <p className="mb-0">30  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user14} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barb Ackue</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Buck Kinnear</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Ira Membrit</h5>
                                                                  <p className="mb-0">22  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Shonda Leer</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>ock Lee</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Maya Didas</h5>
                                                                  <p className="mb-0">40  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Rick O'Shea</h5>
                                                                  <p className="mb-0">50  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Pete Sariya</h5>
                                                                  <p className="mb-0">5  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Monty Carlo</h5>
                                                                  <p className="mb-0">2  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Sal Monella</h5>
                                                                  <p className="mb-0">0  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Sue Vaneer</h5>
                                                                  <p className="mb-0">25  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cliff Hanger</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barb Dwyer</h5>
                                                                  <p className="mb-0">23  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Terry Aki</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user13} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cory Ander</h5>
                                                                  <p className="mb-0">7  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2" >
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user14} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Robin Banks</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Jimmy Changa</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barry Wine</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Poppa Cherry</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Zack Lee</h5>
                                                                  <p className="mb-0">33  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Don Stairs</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Peter Pants</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Hal Appeno </h5>
                                                                  <p className="mb-0">13  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </Row>
                                             </Card.Body>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="recently-add" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Otto Matic</h5>
                                                                  <p className="mb-0">4  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Moe Fugga</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Tom Foolery</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bud Wiser</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Polly Tech</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Holly Graham</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Tara Zona</h5>
                                                                  <p className="mb-0">5  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barry Cade</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="closefriends" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bud Wiser</h5>
                                                                  <p className="mb-0">32  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Otto Matic</h5>
                                                                  <p className="mb-0">9  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Peter Pants</h5>
                                                                  <p className="mb-0">2  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Zack Lee</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barry Wine</h5>
                                                                  <p className="mb-0">36  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Robin Banks</h5>
                                                                  <p className="mb-0">22  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cory Ander</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Moe Fugga</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Polly Tech</h5>
                                                                  <p className="mb-0">30  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Hal Appeno</h5>
                                                                  <p className="mb-0">25  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="home-town" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paul Molive</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paige Turner</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barb Ackue</h5>
                                                                  <p className="mb-0">23  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Ira Membrit</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Maya Didas</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="following" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Maya Didas</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Monty Carlo</h5>
                                                                  <p className="mb-0">3  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cliff Hanger</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>b Ackue</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bob Frapples</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Anna Mull</h5>
                                                                  <p className="mb-0">6  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>ry Wine</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Don Stairs</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Peter Pants</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Polly Tech</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Tara Zona</h5>
                                                                  <p className="mb-0">30  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Arty Ficial</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bill Emia</h5>
                                                                  <p className="mb-0">25  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bill Yerds</h5>
                                                                  <p className="mb-0">9  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link href="#">
                                                                  <img src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Matt Innae</h5>
                                                                  <p className="mb-0">19  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle  className=" btn btn-secondary me-2">
                                                                     <i className="ri-check-line me-1 text-white"></i> Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                       </Tab.Content>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="forth" >
                           <Tab.Container id="left-tabs-example" defaultActiveKey="p1">
                              <Card>
                                 <Card.Body>
                                    <h2>Photos</h2>
                                    <div className="friend-list-tab mt-2">
                                       <Nav variant="pills"  className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                                          <li>
                                             <Nav.Link eventKey="p1" href="#pill-photosofyou">Photos of You</Nav.Link>
                                          </li>
                                          <li>
                                             <Nav.Link eventKey="p2" href="#pill-your-photos" >Your Photos</Nav.Link>
                                          </li>
                                       </Nav>
                                       <Tab.Content>
                                          <Tab.Pane eventKey="p1">
                                             <div className="card-body p-0">
                                                <div className="d-grid gap-2 d-grid-template-1fr-13">
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img51} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img52} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img53} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img54} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img55} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img56} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img57} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img58} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img59} className="img-fluid rounded" alt=""/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img60} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img61} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img62} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img63} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img64} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img65} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img51} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img52} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img53} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img54} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img55} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img56} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img57} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img58} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img59} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="p2">
                                             <div className="card-body p-0">
                                                <div className="d-grid gap-2 d-grid-template-1fr-13 ">
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img51} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img52} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img53} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img54} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img55} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img56} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img57} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img58} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img59} className="img-fluid rounded" alt="Responsive "/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link href="#">
                                                            <img src={img60} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link href="#" className="pe-3 text-white"> 60 <i className="ri-thumb-up-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 30 <i className="ri-chat-3-line"></i> </Link></li>
                                                                  <li><Link href="#" className="pe-3 text-white"> 10 <i className="ri-share-forward-line"></i> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link href="#" className="image-edit-btn"><i className="ri-edit-2-fill"></i></Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                       </Tab.Content>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane>
                        <div className="col-sm-12 text-center">
                           <img src={loader} alt="loader" style={{height: "100px"}} />
                        </div>
                     </Tab.Content>
                  </Col>
               </Tab.Container>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />

    </>
  )
}
