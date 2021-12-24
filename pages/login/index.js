import React from 'react'
import Link from 'next/link'
import Meta from '../../components/Meta'
import {Row, Col, Container, Form, Button, Image} from 'react-bootstrap'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

export default function Login() {
  return (
    <>
      <Meta/>
         <div className="wrapper">
            <section id="container-inside">
               <div id="container-inside">
                  <div id="circle-small"></div>
                  <div id="circle-medium"></div>
                  <div id="circle-large"></div>
                  <div id="circle-xlarge"></div>
                  <div id="circle-xxlarge"></div>
            </div>
            <Container className="p-0" >
               <Row className='no-gutters' >
                  <Col md="6" className="text-center pt-5">
                     <div className="sign-in-detail text-white">
                        <Link className="sign-in-logo mb-5" href="#">
                           <a>
                           <Image src="/assets/images/logo-full.png" className="img-fluid" alt="logo"/>
                           </a>
                        </Link>
                        <div className="sign-slider overflow-hidden ">
                           <Swiper 
                              spaceBetween={30} 
                              centeredSlides={true} 
                              autoplay={{
                                 "delay": 2000,
                                 "disableOnInteraction": false }} 
                              className="list-inline m-0 p-0 ">
                              <SwiperSlide>
                                    <Image src="/assets/images/login/1.png" className="img-fluid mb-4" alt="logo"/>
                                    <h4 className="mb-1 text-white">Find new friends</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                    <Image src="/assets/images/login/2.png" className="img-fluid mb-4" alt="logo"/> 
                                    <h4 className="mb-1 text-white">Connect with the world</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image src="/assets/images/login/3.png" className="img-fluid mb-4" alt="logo"/>
                                 <h4 className="mb-1 text-white">Create new events</h4>
                                 <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                              </SwiperSlide>
                           </Swiper>
                        </div>
                     </div>
                  </Col>
                  <Col md="6" className="bg-white pt-5 pt-5 pb-lg-0 pb-5">
                     <div className="sign-in-from">
                        <h1 className="mb-0">Sign in</h1>
                        <p>Enter your email address and password to access admin panel.</p>
                        <Form className="mt-4">
                           <Form.Group className="form-group">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" className="mb-0" id="exampleInputEmail1" placeholder="Enter email"/>
                           </Form.Group>
                           <Form.Group className="form-group">
                              <Form.Label>Password</Form.Label>
                              <Link href="#" className="float-end">Forgot password?</Link>
                              <Form.Control type="password" className="mb-0" id="exampleInputPassword1" placeholder="Password"/>
                           </Form.Group>
                           <div className="d-inline-block w-100">
                              <Form.Check className="d-inline-block mt-2 pt-1">
                                 <Form.Check.Input type="checkbox" className="me-2" id="customCheck11"/>
                                 <Form.Check.Label>Remember Me</Form.Check.Label>{' '}
                              </Form.Check>
                              <Button variant="primary" type="button"  className="float-end" onClick={() => history.push('/')}>Sign in</Button>
                           </div>
                           <div className="sign-info">
                              <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link href="/auth/sign-up"><a>Sign up</a></Link></span>
                              <ul className="iq-social-media">
                                 <li><Link href="#"><a><i className="ri-facebook-box-line"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="ri-twitter-line"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="ri-instagram-line"></i></a></Link></li>
                              </ul>
                           </div>
                        </Form>
                     </div>
                  </Col>
               </Row>
            </Container>
               
            </section>
         </div>
    </>
  )
}
