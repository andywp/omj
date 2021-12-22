import Head from 'next/head'
import React from 'react'
//scss

/* import "../../public/assets/scss/socialv.scss" */
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
               <link rel="shortcut icon" href="/assets/images/favicon.ico" />
               <link rel="stylesheet" href="/assets/css/libs.min.css"></link>
               <link rel="stylesheet" href="/assets/css/socialv.css?v=4.0.0"></link>
               <link rel="stylesheet" href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
               <link rel="stylesheet" href="/assets/vendor/remixicon/fonts/remixicon.css"></link>
               <link rel="stylesheet" href="/assets/vendor/vanillajs-datepicker/dist/css/datepicker.min.css"></link>
               <link rel="stylesheet" href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
               <link rel="stylesheet" href="/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css"></link>
            </Head>
         </>
         )
      )


   }


}