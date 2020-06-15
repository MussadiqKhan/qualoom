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
        <Link to="/compania">
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
        </Link>

        <div className="solutions">
          <ul>
            <li>
              <h3>Soluciones</h3>
            </li>
            <Link to="/consultoria-it">
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
            </Link>
            <Link to="/servicios-cloud">
              <li>
                <h4>Soluciones Cloud</h4>
              </li>
              <li>Partner Advance AWS </li>
              <li>Cloud IaaS & PaaS</li>
              <li>Cloud híbrida</li>
              <li>Migraciones onpremise</li>
            </Link>
            <Link to="/bigdata-analytics">
              <li>
                <h4>BigData & Analytics</h4>
              </li>
              <li>Diseño e implementacion</li>
              <li>BigData</li>
              <li>Ingesta, procesamiento y análisis</li>
              <li>Analisis avanzado de datos</li>
              <li>Visualización de datos</li>
            </Link>
            <Link to="/desarrollo-software">
              <li>
                <h4>Desarrollo de Software</h4>
              </li>
              <li>Aplicaciones servidor, web y móviles</li>
              <li>Proyectos llave en mano</li>
              <li>Equipo de desarrollo ondemand</li>
              <li>Optimización y mantenimiento</li>
              <li>QA & CI/CD</li>
            </Link>
            <Link to="/iot-robotica">
              <li>
                <h4>IoT y Robótica Software</h4>
              </li>
              <li>Soluciones IoT</li>
              <br />
              <li>Robótica Software</li>
              <br />

              <li>Bot's</li>
            </Link>
          </ul>
        </div>
        <div className="Caso">
          <ul>
            <li>
              <h3>Casos de éxito</h3>
            </li>
            <Link to="caso-de-exito-interflora">
              {" "}
              <li>Interflora </li>
            </Link>
            <Link to="/casos-de-exito">
              <li>La Liga Profesional</li>
              <br />
              <li>Telefónica</li>
            </Link>
          </ul>
        </div>
        <div className="Resources">
          <ul>
            <li>
              <h3>Recursos</h3>
            </li>
            <Link to="/blog">
              {" "}
              <li>Blog</li>
            </Link>
            <Link to="/empleo">
              <li>Empleo</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer_secondary">
        <div className="policy">
          <ul>
            <li>
              <Link to="/aviso-legal">
                <b>Aviso Legal</b>
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
          <a href="https://twitter.com/qualoom" target="_blank">
            <AiFillTwitterSquare />
          </a>
          <a
            href="https://www.facebook.com/qualoom.expertise.3"
            target="_blank"
          >
            <AiFillFacebook />
          </a>
          <a href="https://www.linkedin.com/company/qualoom/" target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
