import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Home() {
  return (
    <>
      <Meta/>
      <div className="wrapper">
          <Sidebar/>
          <Header/>
         
      </div>
      <Footer/>
      
    </>
  )
}
