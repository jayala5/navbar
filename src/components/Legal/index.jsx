import React from "react";
import styled from "styled-components"

function Legal() {

    const ContenedorLegal = styled.div`
  display: block;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  margin-top: 30px;
  
  p{
    display: block;
    margin-bottom:30px;
    font-size: 12px;
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
}
a:hover {
    text-decoration: none;
    color: #0F4C75;
 }
    `
    return(
        <ContenedorLegal>
        <p>
          <a href="/politica-de-privacidad">Política de Privacidad</a> |
          <a href="/terminos-y-condiciones">Términos y Condiciones</a> |
          <a href="">Aviso Legal</a> 
          <a href="">Recomendaciones de Seguridad</a>
        </p>
        <p>Derechos de autor © 2023 TechBank</p>
      </ContenedorLegal>
    )
}

export default Legal;