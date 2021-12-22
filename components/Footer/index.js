import React from 'react'
import Link from 'next/link'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {bindActionCreators} from "redux"
import {getDarkMode, ModeAction, getRtlMode, DirAction} from '../store/mode/mode'
import {connect} from "react-redux"




const Footer = (props) => {

   return (
           <>
               <footer className="iq-footer bg-white">
                   <Container fluid>
                       <Row>
                           <Col lg="6">
                               <ul className="list-inline mb-0">
                                   <li className="list-inline-item"><Link href="/dashboard/extrapages/privacy-policy"><a>Privacy Policy</a></Link></li>{' '}
                                   <li className="list-inline-item"><Link href="/dashboard/extrapages/terms-of-service"><a>Terms of Use</a></Link></li>
                               </ul>
                           </Col>
                           <Col lg="6" className="d-flex justify-content-end">
                               <span>Copyright 2020<Link href="#"> OMG </Link> All Rights Reserved.</span>
                           </Col>
                       </Row>
                   </Container>
               </footer>
             
           </>
       )
}

export default (Footer)