import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carrousel1 from './Imagenes/carrousel1.png';
import carrousel2 from './Imagenes/carrousel2.png';
import carrousel3 from './Imagenes/carrousel3.png';
import Carousel from 'react-bootstrap/Carousel';
import emprendedor from './Imagenes/emprendedor.png';
import ayuda from './Imagenes/ayuda.png';
import tarjeta1 from './Imagenes/tarjeta1.PNG';
import tarjeta2 from './Imagenes/tarjeta2.PNG';
import tarjeta3 from './Imagenes/tarjeta3.PNG';
import styled from 'styled-components';
import tarjetaDeDebito from './Imagenes/tarjeta-de-debito.png'
import prestamo from './Imagenes/prestamos.png';
import descarga from './Imagenes/descargar.png'

function Cuerpo() {

    const CuerpoPrincipal = styled.body`
      background-color: rgb(13, 1, 52);
      margin-bottom: 5%;
      `
    const BtnBotonera = styled.button`
    width: 150px;
    height: 150px;
    background-color: white;
    border: none;
    color: #3282BB;
    border-radius: 100%;
    box-shadow: 3px 3px 3px 3px;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
    `
    const ContenedorBotonera = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 20vh;
      `
    const Botonera = styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 70px;
      `
    const Linea = styled.p`
  border-bottom: 2px solid rgb(83, 76, 76);
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`
    const Subtitulo = styled.p`
  text-align: center;
  font-size: 50px;    
  text-shadow: 2px 2px 3px gray;
  color: rgb(241, 233, 233);
  margin-top: 10px;
  margin-bottom: 10px;
  `
    const Ayuda = styled.div`
  box-shadow: 0 4px 8px 0 rgba(240, 234, 234, 0.89);
  width: 92%;
  margin-left: 4%;    
  text-align: center;
  font-family: arial;
  height: 260px;
  background-color: #015692;
  box-shadow: 5px 5px 0px 0px black;
 border-radius: 15px;
 display:grid;
 grid-template-columns: 50% 50% ;
 margin-bottom: 10px;
`
    const BotonDos = styled.button`
  width: 300px;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #f6f6f6;
  background-color: #0f4c75;
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px black;
  margin-left: 10px;
  margin-right: 10px;
`
    const Descarga = styled.p`
  text-align: center;
  font-size: 25px;
  color: #3282BB;
  font-family: arial;
`
    const GridConoce = styled.div`
  text-align: center;
  justify-items: center;
  `
    const GridCard = styled.div`
    display: grid;
    grid-template-columns: 34% 33% 33%;
    padding: 5%;
    justify-content: center;
    margin-bottom: 10px;
`
    const Cards = styled.div`
    margin: 30px;
    display: grid;
    grid-template-columns: 34% 33% 33%;
`
    const Imagen = styled.img`
  max-width: 100%; 
  height: auto;
`
    const TurnoSucursal = styled.p`
  font-size: 20px;
  color: #f6f6f6;
  font-weight: bold;
  margin-bottom:20px;
`
    const SolicitaTurno = styled.p`
  font-size: 50px;
  color: white;
  font-weight: bold;
  margin: 20px;
`
    const InfoConsumidores = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 90%;
  padding: 20px;
  text-align: start;
  margin: 5%;
  border: 1px solid #3282BB ;

  `
    const MiniTitulo = styled.h5`
  text-align: center;
  color: aliceblue;
`
    const EmprendedorSueldo = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: black;
  img{
    margin-left: 28px;
    margin-top: 30px;
  }
`
    const CardTitulo = styled.h3`
  font-weight: bold;
`
const CardText = styled.p`
 color: black;
 font-size: 20px;

`
    /*
    a:hover {
      color:#f07a1a;
    }
    
    a:link {
      text-decoration: none;
      color: rgb(231, 215, 215);
    }*/

const ItemInfo = styled.p`
margin-left: 40px;
a{
   align-items: center;
justify-content: space-between; 
color: white;
text-decoration-line: none;
}
a:hover {
    background-color: #0f4c75
}

`
    return (
        <>
            <CuerpoPrincipal>
                {/* Carrousel */}
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* Fin carrousel */}

                {/* Botonera */}
                <ContenedorBotonera>
                    <Botonera>
                        <BtnBotonera>
                            Promociones
                        </BtnBotonera>
                        <BtnBotonera>
                            Cuentas
                        </BtnBotonera>
                        <BtnBotonera>
                            Tarjetas
                        </BtnBotonera>
                        <BtnBotonera>
                            Prestamos
                        </BtnBotonera>
                        <BtnBotonera>
                            Inversiones
                        </BtnBotonera>
                        <BtnBotonera>
                            Seguros
                        </BtnBotonera>
                    </Botonera>
                </ContenedorBotonera>
                {/* Fin Botonera */}

                <Linea></Linea>

                <Subtitulo>Tu día a día en TechBank</Subtitulo>
                {/* dia a dia */}
                <GridCard>
                    <div className="card" style={{ width: '30rem' }}>
                        <img className="card-img-top" src={tarjeta1} alt="Card image cap" />
                        <div className="card-body">
                            <CardTitulo> Hagamos tus claves, usuario y token.</CardTitulo>
                            <CardText>Te ayudamos a crearlos o recuperarlos.</CardText>
                            <a href="#" className="btn btn-primary">Conocé más presionando aquí</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: '30rem' }}>
                        <img className="card-img-top" src={tarjeta2} alt="Card image cap" />
                        <div className="card-body">
                            <CardTitulo>Queremos cuidarte de las estafas y fraudes virtuales.</CardTitulo>
                            <CardText>Te contamos todo lo que tenes que saber.</CardText>
                            <a href="#" className="btn btn-primary">Conocé más presionando aquí</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: '30rem' }}>
                        <img className="card-img-top" src={tarjeta3} alt="Card image cap" />
                        <div className="card-body">
                            <CardTitulo>Videos para aprender a realizar todo de forma online.</CardTitulo>
                            <CardText>Te mostramos como usar la App Galicia y Online Banking.</CardText>
                            <a href="#" className="btn btn-primary">Conocé más presionando aquí</a>
                        </div>
                    </div>
                </GridCard>
                {/* Fin dia a dia */}


                {/* Turno */}
                <Ayuda>
                    <p></p>
                    <SolicitaTurno>Solicita tu turno</SolicitaTurno>
                    <TurnoSucursal>Podés solicitar tu turno para ser atendido en sucursales ingresando a Banca Online</TurnoSucursal>

                    <BotonDos>Saca tu turno</BotonDos>
                    <BotonDos>No tengo acceso</BotonDos>
                    <p></p>
                </Ayuda>
                {/* Fin turno */}

                {/* Ofrecemos */}
                <div>
                    <Subtitulo>Conocé lo que tenemos para ofrecer</Subtitulo>
                    <MiniTitulo>Todos los beneficios están enfocados para que puedas aprovechar al máximo ser cliente de TECHBANK</MiniTitulo>

                </div>
                <GridConoce>
                    <Cards>
                        <div className="card" style={{ width: '25rem' }}>
                            <EmprendedorSueldo>
                            <img src={tarjetaDeDebito} width="300px"/>
                            </EmprendedorSueldo>
                            <div className="card-body">
                                <CardTitulo>Pedí tu Tarjeta TechBank</CardTitulo>
                                <CardText>Sacá tu tarjeta y empezá a viajar. Todas tus compras suman Puntos TechBank. ¡No te quedes afuera!</CardText>
                                <a href="#" className="btn btn-primary">Conocé más</a>
                            </div>
                        </div>
                    
                    
                        <div className="card" style={{ maxWidth: '25rem' }}>
                            <EmprendedorSueldo>
                                <img src={emprendedor} alt="" width="300px"/>
                            </EmprendedorSueldo>
                            
                            <div>
                            <CardTitulo>¿Sos emprendedor?</CardTitulo>
                                <CardText>Conocé todos los beneficios que tenemos para vos si comenzás a acreditar tus ventas con nosotros.</CardText>
                                <a href="#" className="btn btn-primary">Conocer más</a>
                            </div>
                        </div>
                        <div className="card" style={{ maxWidth: '25rem' }}>
                            <EmprendedorSueldo>
                                <img src={prestamo} alt="" width="300px"/> 
                            </EmprendedorSueldo>
                            <div>
                                <CardTitulo>Trae tu Sueldo</CardTitulo>
                                <CardText>¡Llevate tu cuenta 100% bonificada y hasta $100.000 de regalo! Traé tu sueldo y empezá a disfrutar de los beneficios de TechBank.</CardText>
                                <a href="#" className="btn btn-primary">Conocer más</a>
                            </div>
                        </div>
                    </Cards>
                </GridConoce>
              {/* Fin ofrecemos *  /}

                <Linea></Linea>

                {/* Info */}
                <div>
                    <Subtitulo>Información para consumidoras y consumidores</Subtitulo>
                    <InfoConsumidores >
                        <div>      
                            <ItemInfo>
                                <a href="/content/galicia/ar/es/home/personas/cuenta-gratuita-universal.html"> Cuenta Gratuita Universal</a>
                            </ItemInfo>
                            <ItemInfo>
                                <a href=""> Cuenta Ceconar</a>
                            </ItemInfo>
                            <ItemInfo>
                                <a href=""> Cuenta para la Repatriación de Fondos</a>
                            </ItemInfo>
                            <ItemInfo>
                                <a href=""> Cuenta Ceproar</a>
                            </ItemInfo>
                        </div>
                        <div >
                            <div>
                                <ItemInfo >
                                    <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"> Hacer reclamo en Defensa del Consumidor</a>
                                </ItemInfo>
                                <ItemInfo >
                                    <a href=""> Información al Usuario Financiero</a>
                                </ItemInfo>
                                <ItemInfo>
                                    <a href=""> Botón de arrepentimiento</a>
                                </ItemInfo>
                                <ItemInfo>
                                    <a href=""> Contratos de Adhesión - Ley 24.240 de Def. del Consumidor</a>
                                </ItemInfo>
                            </div>
                        </div>
                        
                    </InfoConsumidores>
                </div>

                {/* Fin info */}

                {/* Ayuda */}
                <Ayuda>
                    <div>
                    <img src={ayuda} alt="" width="70px" />
                    <p style={{ fontSize: '30px' }}>¿Necesitas Ayuda?</p>
                    <BotonDos>Ir a ayuda</BotonDos>
                    <p style={{ fontSize: '15px' }}>Respondemos tus dudas</p>
                    
                    </div>
                    <div>
                    <Descarga>
                    <img src={descarga} alt="" width="70px" />
                    <p style={{ fontSize: '30px' }}> Descargá Banca Móvil TechBank</p>
                    <BotonDos>Ir a descargar</BotonDos>
                    </Descarga>
                </div>
                </Ayuda>
                {/* Fin Ayuda */}

                {/* Descarga app */}
               
                {/* Fin Descarga app */}
            </CuerpoPrincipal >
        </>
    );
}
export default Cuerpo;