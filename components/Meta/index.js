import Head from 'next/head'
import React from 'react'

//scss
//import 'bootstrap/dist/css/bootstrap.min.css';
/* import './scss/socialv.scss' */
export default class extends React.Component {
   state ={
      title : "OMG | By Qwords"
    }
    
   render(){
      return (
         (
         <>
            <Head>
               <title> {this.state.title} </title>
               
               
      


            </Head>
         </>
         )
      )


   }


}