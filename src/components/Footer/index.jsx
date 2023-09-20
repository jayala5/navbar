import React from "react";
import styled from "styled-components"
import Redes from "../Redes"
import QuickLinks from "../QuickLinks";
import Legal from "../Legal";



function Footer() {
    const ContenedorPrincipal = styled.footer`
       background-color: #1B262C;
       color: #fff;
       padding: 10px 0;
       font-family: Arial, Helvetica, sans-serif;
    `

    const ContenedorSecundario = styled.div`
        background-color: #1B262C;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 250px;
     `

    const Columna = styled.div`
        list-style: none;
        width: 350px;

    p {
        font-size: 20px;
        margin-left: 15px;
        margin-bottom: 40px;
    }

    li {
        margin: 10px;
        font-size: 15px;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    a:hover {
        background-color: #0F4C75;
        padding: 3px;
    }

    .columna2 {
    margin-top: 20px;
  }
        `

    return (
        <ContenedorPrincipal>
            <ContenedorSecundario>
                <Columna>
                    <p>Conócenos</p>
                    <li><a href="">Información Financiera</a></li>
                    <li><a href="">Disciplina de Mercado</a></li>
                    <li><a href="">Resumen de Información Financiera</a></li>
                    <li><a href="">Programa de Integridad</a></li>
                    <li><a href="">Información Corporativa</a></li>
                    <li><a href="">TechBank Sustentable</a></li>
                </Columna>
                <Columna class=" columna2">
                    <p>Información Importante</p>
                    <li><a href="">Ayuda Urgente</a></li>
                    <li><a href="">Defensa al Consumidor</a></li>
                    <li>
                        <a href=""
                        >Cajeros con Funcionalidad para Personas con Discapacidad</a
                        >
                    </li>
                    <li><a href="">Personas Expuestas Politicamente</a></li>
                    <li><a href="">Reporte Responsable de Vulnerabilidades</a></li>
                    <li><a href="">Política Ambiental</a></li>
                </Columna>
                <Columna>
                    <p>Productos</p>
                    <li><a href="">Tarjetas de Débito y Crédito</a></li>
                    <li><a href="">Préstamos Personales</a></li>
                    <li><a href="">Plazo Fijo</a></li>
                    <li><a href="">Inversiones</a></li>
                    <li><a href="">Cobrá tu Sueldo en TechBank</a></li>
                    <li><a href="">Promociones</a></li>
                </Columna>
            </ContenedorSecundario>
            <Redes />
            <QuickLinks />
            <Legal />
        </ContenedorPrincipal>

    )
}

export default Footer;