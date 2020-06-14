import React, { Component } from "react"
import ContactForm from "../components/index/contact_form"
import Header from "../components/header"
import Footer from "../components/footer"

export class contacto extends Component {
  render() {
    return (
      <div>
        <div
          className="background-contacto"
          style={{
            background: `url(../images/a-qualoom-home.jpg)`,
          }}
        >
          <div className="header_div">
            <Header />
          </div>
          <div className="main">
            <div className="empty"></div>
            <div className="text">
              <h1>Esperamos poder conocerte</h1>
              <p>
                Estaremos encontados de atender tus peticiones. De manera
                adicional, si necesitas contactar con nosotros vía telefónica,
                puedes hacerlo a través del teléfono que encontrarás en esta
                página o personalmente en nuestras oficinas.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    )
  }
}

export default contacto
