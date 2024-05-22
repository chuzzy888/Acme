import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <>
   
    <div className='flex justify-between items-center mx-10 my-5 flex-col gap-8 lg:gap-0 md:flex-row '>
        <div className='flex jusstify-around items-center gap-3 flex-col md:flex-row'>
        <p>&copy; copyright 2024 Flow,inc.</p>
        <p> Terms.</p>
        <p> Sitemap.</p>
        <p>Privacy.</p>
        <p> Your Privacy Choices.</p>
        </div>

        <div className='flex justify-around items-center gap-3 flex-col md:flex-row mb-5'>
            <p><TbWorld /></p>
            <p>English(US)</p>
            <p>$ USD</p>
            <p><IoLogoFacebook /></p>
            <p><FaSquareTwitter /></p>
            <p><FaInstagramSquare /></p>
        </div>
    </div>
    </>
  )
}

export default Footer