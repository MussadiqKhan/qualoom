import React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"
import logo from "../../static/images/logo_qualoom_blanco.png"
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_primary">
        <div className="logo_div">
          <img src={logo} width="100" />
        </div>
        <div className="company">
          <ul>
            <li>
              <h3>Compañía</h3>
            </li>
            <li>Sobre nosotros</li>
            <li>Nuestro equipo</li>
            <li>Seguridad y</li>
            <li>Certificaciones</li>
          </ul>
        </div>
        <div className="solutions">
          <ul>
            <li>
              <h3>Soluciones</h3>
            </li>
            <li>
              <h4>Consultoría IT</h4>
            </li>
            <li>Transformación digital</li>
            <li>Optimización de arquitecturas</li>
            <li>Alta disponibilidad y escalabilidad</li>
            <li>DevOps, SysOps y</li>
            <li>SysAdmins</li>
            <li>Planes de contingencia y recuperación</li>
            <li>Pruebas de estrés</li>
            <li>Auditoría de sistemas</li>
            <li>Soporte 24x7</li>
            <li>
              <h4>Soluciones Cloud</h4>
            </li>
            <li>Partner Advance AWS Cloud</li>
            <li>IaaS & PaaS</li>
            <li>Cloud híbrida</li>
            <li>Migraciones onpremise</li>
            <li>
              <h4>BigData & Analytics</h4>
            </li>
            <li>Diseño e implementacion</li>
            <li>BigData</li>
            <li>Ingesta, procesamiento y análisis</li>
            <li>Analisis avanzado de datos</li>
            <li>Visualización de datos</li>
            <li>
              <h4>Desarrollo de Software</h4>
            </li>
            <li>Aplicaciones servidor, web y móviles</li>
            <li>Proyectos llave en mano</li>
            <li>Equipo de desarrollo ondemand</li>
            <li>Optimización y mantenimiento</li>
            <li>QA & CI/CD</li>
            <li>
              <h4>IoT y Robótica Software</h4>
            </li>
            <li>Soluciones IoT</li>
            <li>Robótica Software</li>
            <li>Bot's</li>
          </ul>
        </div>
        <div className="Caso">
          <ul>
            <li>
              <h3>Casos de éxito</h3>
            </li>
            <li>Interflora La Liga</li>
            <li>Profesional</li>
            <li>Telefónica</li>
          </ul>
        </div>
        <div className="Resources">
          <ul>
            <li>
              <h3>Recursos</h3>
            </li>
            <li>Blog</li>
            <Link to="/empleo">
              <li>Empleo</li>
            </Link>
            <li>Actualidad</li>
          </ul>
        </div>
      </div>
      <div className="footer_secondary">
        <div className="policy">
          <ul>
            <li>
              <Link to="/aviso-legal">
                <b>Avios Legal</b>
              </Link>
            </li>
            <li>
              <Link to="/politica-de-privacidad">
                <b>Política de privacidad</b>
              </Link>
            </li>
            <li>
              <Link to="/politica-de-cookies">
                <b>Política de Cookies</b>
              </Link>
            </li>
          </ul>
          <p>
            @ 2018 Qualoom Expertise Technology. Todos los derechos reservados.
          </p>
        </div>
        <div className="social">
          <AiFillTwitterSquare />
          <AiFillFacebook />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Footer
