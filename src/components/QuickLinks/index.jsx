import React from "react";
import styled from "styled-components"

function QuickLinks() {

    const QuickContenedor= styled.div`
         margin: 60px 0 0 50px;

         ul {
    list-style: none;
    display: flex;
    height: 50%;
    justify-content: end;
  }
  li {
    margin-right: 50px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #0F4C75;
    text-decoration: none;
  }
    `

    return(
        <QuickContenedor>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/cuentas">Cuentas</a></li>
            <li><a href="/transferencias">Transferencias</a></li>
        </ul>
    </QuickContenedor>
    )
}

export default QuickLinks;