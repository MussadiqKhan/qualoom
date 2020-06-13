import React, { Component } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import interfloralogo from "../../static/images/logo-interflora.png"
import ecommerce from "../../static/images/Interflora.003.platform.png"

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
        <div className="interflora-section-1">
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
        <div className="interflora-section-2">
          <h3>Objetivos del Proyecto</h3>
          <p>
            A comienzos de 2014, Interflora toma la decisión de migrar su
            infraestructura de servidores hospedada en un hosting clásico a una
            solución de cloud computing para tratar de paliar los numerosos
            problemas que les suponía la administración de servidores, sobretodo
            durante los periodos punta del negocio en los que se llega a
            multiplicar por 5 su actividad habitual. Los principales objetivos
            del proyecto son:
          </p>
          <ol>
            <li>
              Disponer de una infraestructura capaz de absorber la carga en los
              periodos punta sin necesidad de mantener una flota de servidores
              sobredimensionada.
            </li>
            <li>
              Minimizar los costes operativos de la infraestructura de
              servidores.
            </li>
            <li>
              Optimizar los procesos de despliegue de las aplicaciones de
              negocio.
            </li>
            <li>
              Mejorar la infraestructura de monitorización de la plataforma.
            </li>
            <li>
              Garantizar la seguridad en el acceso a las distintas aplicaciones
              empresariales y minimizar la superficie de aplicación expuesta al
              tráfico externo.
            </li>
            <li>
              Optimizar los procesos de copias de seguridad y recuperación
              frente a desastres.
            </li>
          </ol>
          <p>
            Para dar solución a todos estos requerimientos se decidió migrar
            toda la infraestructura de servidores a Amazon Web Services,
            adaptando cada parte del conjunto para maximizar los beneficios que
            ofrecen los servicios gestionados de AWS.
          </p>
          <h3>E-Commerce</h3>
          <p>
            La plataforma de comercio electrónico de Interflora supone el
            principal punto de entrada del negocio y es la parte más expuesta a
            Internet, con lo que se hacen críticos los siguientes
            requerimientos:
          </p>
          <ol>
            <li>
              Maximizar la disponibilidad del servicio, incluso en escenarios de
              picos de carga inesperados o programados.
            </li>
            <li>Minimizar el tiempo de respuesta al cliente final</li>
            <li>Minimizar la exposición de servicios en Internet</li>
          </ol>
          <p>
            Para conseguir estos objetivos se optó por la implementación de
            múltiples servicios gestionados de AWS:
          </p>
          <ol>
            <li>
              <b>EC2 + Autoscaling:</b> La implementación de Autoscaling permite
              a Interflora adaptar el tamaño de su infraestructura a las
              necesidades reales del negocio en cada momento e implantar un
              mecanismo de recuperación automático en caso de fallo en alguno de
              los nodos.
            </li>
            <li>
              <b>Elastic Load Balancing (ELB):</b> El servicio de balanceador de
              carga gestionado de Amazon permite minimizar la superficie de
              ataque expuesta en Internet y proporciona un mecanismo de balanceo
              de carga robusto y escalable con un tiempo de implantación de unos
              pocos minutos.
            </li>
            <li>
              <b>Relational Database Service (RDS):</b> Base de datos relacional
              con gestión automatizada de copias de seguridad, replicación,
              failover y escalado vertical.
            </li>
            <li>
              <b>Elasticache:</b> Caché y almacén de sesiones compartido por
              todos los nodos de aplicación.
            </li>
            <li>
              <b>Cloudfront:</b> Red de distribución de contenidos con modalidad
              de pago por uso para la optimización en la descarga de contenidos
              estáticos y reducir la necesidad de aprovisionar una
              infraestructura de servidores permanente para este fin.
            </li>
          </ol>
          <img
            src={ecommerce}
            alt="ecommerce platform"
            width="400"
            style={{ margin: "0 auto" }}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Interflora
