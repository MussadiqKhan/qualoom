import React, { Component } from "react"
import { FiExternalLink } from "react-icons/fi"
import { Link } from "gatsby"

export class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="contact_form">
          <form action="https://formspree.io/mdowzbnv" method="POST">
            <div className="email-name">
              <input type="text" placeholder="Nombre" required name="name" />
              <input
                type="email"
                placeholder="Email"
                required
                name="_replyto"
              />
            </div>
            <input
              type="text"
              placeholder="Telefono(opcional)"
              name="telephone"
            />
            <textarea
              type="email"
              rows="10"
              cols="40"
              placeholder="Comentarios"
              name="message"
            />
            <span className="legal-check">
              <input type="checkbox" required />
              <span>
                Acepto que Qualoom trate mis datos para tramitar la consulta,
                resolver mis dudas y ponerse en contacto conmigo. Puedes, en
                cualquier momento, revocar tu consentimiento o ejercer tus
                derechos de acceso, rectificación, cancelación, oposición,
                limitación del tratamiento y portabilidad escribiéndonos a
                contacto@qualoom.es. Más información en la Política de
                privacidad.{" "}
                <Link to="/politica-de-privacidad">
                  <FiExternalLink style={{ color: "black" }} />
                </Link>
              </span>
            </span>
            <button className="enviar">Enviar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
