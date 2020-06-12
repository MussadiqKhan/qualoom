import React, { Component } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import interfloralogo from "../../static/images/logo-interflora.png"

class Interflora extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div
          className="background-interflora"
          style={{
            background: `url(../images/interflora-dcx.png)`,
          }}
        >
          <div className="header_div">
            <Header />
          </div>
          <div className="main">
            <div className="empty"></div>
            <div className="text">
              <h1>Flores y tecnología en perfecta armonía</h1>
              <p>
                Qualoom ha sido el partner español de Amazon Web Services (AWS)
                seleccionado por Fleurop Interflora España S.A. para realizar la
                migración de su infraestrucuta a la nube, y ofrecer un soporte
                continuo. Interflora es el líder en el negocio de la gestión de
                encargos florales y plantas naturales en España, y una de las
                divisiones más significativas de la red global de Fleurop Inc.
              </p>
            </div>
          </div>
        </div>
        <div className="interflora-main">
          <div>
            <img src={interfloralogo} alt="logo-interflora" />
            <p>
              A comienzos de 2014, Interflora toma la decisión de migrar su
              infraestructura de servidores hospedada en un hosting clásico a
              una solución de cloud computing para tratar de paliar los
              numerosos problemas que les suponía la administración de
              servidores, sobretodo durante los periodos punta del negocio en
              los que se llega a multiplicar por 5 su actividad habitual.
            </p>{" "}
          </div>
          <div>
            <iframe
              width="446"
              height="251"
              src="https://www.youtube.com/embed/SQiPn3afIVo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Interflora
