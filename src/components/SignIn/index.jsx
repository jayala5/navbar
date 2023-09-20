import React from 'react'
import logo from "./imagenes/techbank.png"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';






function SingIn() {


    return (
        <>

            <div className='container'>
                <div id="header" className="top">
                    <div className="d-flex align-items-center">
                        <a href="" className="logo me-auto">
                            <img src={logo} width="170px" alt="" className="img-fluid" />
                        </a>
                    </div>
                    <form action="" className="form">
                        <p>Iniciar Sesion</p>
                        <label htmlFor="usuario">
                            Usuario
                            <input type="text" id="usuario" name="usuario" />
                        </label>
                        <label htmlFor="contraseña">
                            Contraseña
                            <input type="password" name="contraseña" id="sontraseña" />
                            <input type="submit" value="Iniciar Sesion" className="button" />
                        </label>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SingIn