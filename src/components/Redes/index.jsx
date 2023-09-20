import React from "react";
import styled from "styled-components"
import icons from "react-icons"
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineWhatsApp, AiOutlineMail, AiFillPhone } from "react-icons/ai";

function Redes() {

    const Redes = styled.div`
     margin: 50px 0 0 50px;
    display: inline-block;
    float: left;
    
     a {
    display: inline-block;
    text-decoration: none;
    background-color: #000;
    color: #3282B8;
    border: 1px solid #BBE1FA;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: 0 5px;
    transition: 0.3s;
    text-align: center;
    

  }
   :hover {
    color: #fff;
    background-color: #8cc7ee;
    box-shadow: 0 0 20px #fff;
    }
    
    `

    return (
        <Redes className="redes" >
            <a href="#"><AiFillPhone /> </a>
            <a href="#"><AiOutlineMail /> </a>
            <a href="#"><AiOutlineWhatsApp /></a>
            <a href="https://twitter.com/login?lang=es"
            ><AiOutlineTwitter /></a>
            <a href="https://es-la.facebook.com/login"
            ><AiFillFacebook /></a>
            <a href="https://www.instagram.com"
            ><AiOutlineInstagram /></a>
            <a href="https://www.youtube.com/"
            ><AiFillYoutube /></a>

        </Redes >

    )
}

export default Redes;