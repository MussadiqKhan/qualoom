import React, { Component } from "react"
import { Helmet } from "react-helmet"
import ContactForm from "../components/index/contact_form"
import Header from "../components/header"
import Footer from "../components/footer"

export class contacto extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contacto - Qualoom</title>
          <meta
            name="description"
            content="Estaremos encontados de atender tus peticiones. Ponte en contacto con Qualoom."
          />
        </Helmet>
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
        <div className="contacto-main">
          <div className="contacto-details">
            <h2>Contacto</h2>
            <p>Siempre disponibles para ayudarte</p>
            <ol>
              <li>Plaza de Valencia 6 Bajo Local</li>
              <li>Móstoles, Madrid 28937</li>
              <li>España</li>
              <li>
                {" "}
                <br />
              </li>
              <li>Teléfono: +34 91 236 4808</li>
              <li>
                E-mail:{" "}
                <a
                  href="mailto:contacto@qualoom.es"
                  style={{ color: "#006ec7" }}
                >
                  contacto@qualoom.es{" "}
                </a>
              </li>
            </ol>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.781559399747!2d-3.8599559854180914!3d40.32500526913839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c284a8d294f%3A0x867058335efc8016!2sPlaza%20Valencia%2C%206%2C%2028937%20M%C3%B3stoles%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2s!4v1592153005087!5m2!1sen!2s"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <Footer />
      </div>
    )
  }
}

export default contacto
