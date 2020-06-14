import React, { Component } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import interfloralogo from "../../static/images/logo-interflora.png"
import ecommerce from "../../static/images/Interflora.003.platform.png"
import erp from "../../static/images/Interflora.004.erp_.png"
import hybridcloud from "../../static/images/Interflora.005.hybrid.png"
import management from "../../static/images/Interflora.006.configuracion.png"
import monitoring from "../../static/images/Interflora.007.monitorizacion.png"

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

          <h3>Aplicaciones Empresariales</h3>
          <p>
            Interflora cuenta con diversas aplicaciones de gestión empresarial
            que facilitan la gestión de múltiples procesos de negocio más allá
            de la simple recepción de pedidos llevada a cabo en la parte de
            E-Commerce:
          </p>
          <ol>
            <li>Gestión de pedidos (ERP)</li>
            <li>Atención al Cliente (CRM)</li>
            <li>Gestión financiera</li>
            <li>Administración interna</li>
            <li>Business Intelligence</li>
          </ol>
          <p>
            Toda esta actividad se desarrolla con aplicativos de gestión
            empresarial comerciales sobre una infraestructura Windows que se
            apoya en diversas tecnologías Microsoft como Active Directory o MS
            SQL Server, siendo este último uno determinante en el rendimiento
            del sistema debido a la elevada demanda de memoria y almacenamiento.
            Para solventar este problema se ha hecho uso de instancias EC2
            optimizadas para EBS (almacenamiento SAN), y volúmenes SSD, cuyo
            rendimiento predecible y herramientas de monitorización integradas
            ha permitido llegar a un equilibrio entre el rendimiento deseado y
            los costes de la infraestructura.
          </p>
          <p>
            Esta infraestructura de aplicaciones requiere servidores adicionales
            de reporting y business intelligence, y provee una capa de servicios
            web para la integración del ERP con el sistema de E-Commerce,
            balanceada entre los distintos servidores de aplicación mediante
            ELB. El esquema de los distintos servicios queda como en la
            siguiente figura:
          </p>
          <img
            src={erp}
            alt="ecommerce platform"
            width="400"
            style={{ margin: "0 auto" }}
          />
          <p>
            Para garantizar un acceso óptimo al aplicativo de gestión
            empresarial, y debido a las fuertes restricciones de las
            herramientas de cliente en cuanto a latencia con los servidores de
            aplicación, insalvables debido a las latencias entre España y el
            datacenter AWS más próximo, se decidió implantar una infraestructura
            de Servicios de Escritorio Remoto para proporcionar a los usuarios
            en España de un mecanismo óptimo en el acceso a sus herramientas de
            trabajo.
          </p>
          <h3>Infraestructura de Nube Híbrida</h3>
          <p>
            Una de las funcionalidades clave para Interflora a la hora de migrar
            todos los servicios a la nube de Amazon era garantizar una
            comunicación segura y eficiente con sus aplicaciones de negocio y
            paneles de mandos, así como seguir permitiendo una correcta
            sincronización dentre ciertos servicios hospedados en las
            instalaciones de Interflora España (Active Directory, VoIP, etc) con
            el resto de infraestructura en AWS.
          </p>
          <p>
            Para lograr este objetivo con las máximas garantías se optó por la
            utilización de AWS DirectConnect en colaboración con Colt, uno de
            los múltiples partners en España que proporcionan acceso a dicho
            servicio. DirectConnect otorga a los clientes finales la posibilidad
            de conectarse a un puerto de físico dedicado para la conectividad de
            red con todos los servicios de Amazon, tanto hospedados en la nube
            pública de AWS como aquellos alojados dentro del servicio de red
            privada VPC.
          </p>
          <img
            src={hybridcloud}
            alt="ecommerce platform"
            width="400"
            style={{ margin: "0 auto" }}
          />
          <h3>Gestión de la Configuración: Puppet</h3>
          <p>
            Con el objetivo de proporcionar un mecanismo de centralización y
            documentación de la configuración de la infraestructura, sobretodo
            en lo referente a las instancias Linux del entorno de E-Commerce, se
            implementó toda la configuración del sistema en forma de manifiestos
            y módulos de Puppet. Gracias a este servicio, toda la configuración
            de la plataforma se encuentra centralizada, modelada en forma de
            código versionable y permite simplificar enormemente la
            implementación de cambios en la configuración, sin necesitar acceder
            a cada nodo de forma independiente. Adicionalmente, para facilitar
            las labores de ejecución paralela de tareas y realizar consultas de
            información local de un grupo de instancias se implementó
            Mcollective como mecanismo de orquestación de tareas.
          </p>
          <img
            src={management}
            alt="ecommerce platform"
            width="400"
            style={{ margin: "0 auto" }}
          />
          <p>
            Para que este escenario sea posible con el mínimo de interacción por
            parte de los administradores de sistemas, se ha implementado un
            bootstrap personalizado de manera que todas las instancias se
            registran en estos servicios de gestión de forma automática y se le
            asignan una serie de propiedades en función de su rol dentro de la
            infraestructura, de manera que cada nodo o grupo de nodos sea
            fácilmente localizable mediante filtros simples de Mcollective.
          </p>
          <h3>Monitorización y Alertas</h3>
          <p>
            Debido al volumen y heterogeneidad de los diferentes servicios que
            componen la infraestructura de Interfora, se ha decidido utilizar
            varios servicios diferentes para la consolidación de métricas de
            rendimiento y logs:
          </p>
          <img
            src={monitoring}
            alt="ecommerce platform"
            width="400"
            style={{ margin: "0 auto" }}
          />
          <ol>
            <li>
              <b>Amazon Cloudwatch:</b> Todos los servicios de AWS se integran
              de forma inmediata con este servicio, lo que permite simplificar
              en gran medida la recolección de métricas de los servicios
              hospedados en AWS (ELB,RDS, Elasticache, Cloudfront…). Para
              monitorizar algunos aspectos clave de la infraestructura no
              disponibles de serie con las métricas proporcionadas por AWS, se
              implementaron múltiples métricas personalizadas tanto en la
              infraestructura Windows como Linux.
            </li>
            <li>
              <b>Amazon ELB+S3:</b> Todos los ELBs publicados, principal punto
              de entrada de potenciales clientes, exportan sus logs de acceso a
              S3 para su posterior análisis.
            </li>
            <li>
              <b>ELK:</b> Para proporcionar una visión detallada de los eventos
              ocurridos en cualquier punto de la plataforma, se implementó un
              servicio de recolección de logs basado en las herramientas de
              Elastic Inc. para el análisis de Syslog, Eventos de Windows, Logs
              de Acceso de los ELBs públicos y múltiples ficheros de log de las
              distintas aplicaciones internas.
            </li>
            <li>
              <b>Ganglia:</b> Aunque Cloudwatch proporciona todas las
              herramientas necesarias para la monitorización del rendimiento de
              la infraestructura, la implementación de un recolector de Ganglia
              y la distribución de agentes en todos los nodos permite la
              agregación de métricas por conceptos del negocio, ofrece un
              histórico de métricas mucho mayor y otorga la posibilidad de
              reportar métricas con una granularidad de segundos.
            </li>
            <li>
              <b>Nagios:</b> Para la ejecución de healthchecks personalizados
              que comprueben el estado de los distintos servicios hospedados en
              las instancias EC2 se ha utilizado Nagios, el estándar “de facto”
              para la implementación de este tipo de servicios de
              monitorización.
            </li>
          </ol>
          <h3>Seguridad</h3>
          <p>
            Una de las mayores preocupaciones de Interflora a la hora de mover
            sus servidores a la nube era minimizar el riesgo de brechas de
            seguridad en el acceso a los distintos servicios que componen la
            infraestructura de negocio, tanto en la parte pública del mismo
            (E-Commerce) como en las aplicaciones internas. Para ello, se ha
            hecho uso de un gran abanico de opciones proporcionadas por los
            diferentes servicios de red y seguridad de AWS:
          </p>
          <ol>
            <li>
              <b>VPC:</b> Todas las instancias EC2 del negocio se alojan dentro
              de VPC, un servicio de AWS que permite aprovisionar una sección de
              EC2 completamente aislada de Internet
            </li>
            <li>
              <b>Subredes:</b> Dentro de la VPC se aprovisionaron distintas
              subredes, cada una de ellas destinadas al alojamiento de ciertos
              tipos de servicios en base a su naturaleza: Acceso público o
              privado, instancias EC2 administradas por Interflora, servicios
              gestionados de AWS, Availability Zone, etc…
            </li>
            <li>
              <b>Security Groups:</b> En lugar de implementar complejos
              mecanismos de firewall y ACLs de red, se optó por la utilización
              de Security Groups, una característica de la gestión de redes en
              EC2 que permite configurar restricciones de red en base a
              pertenencia a grupos de cada instancia y/o servicio gestionado de
              AWS.
            </li>
            <li>
              <b>NAT/VPN administrativa:</b> Como se ha mencionado con
              anterioridad, VPC es una sección de red completamente aislada de
              EC2. Para proporcionar acceso a Internet y los distintos servicios
              de AWS hospedados fuera de la red interna (S3, SNS…) se configuró
              una instancia de NAT por cada zona de disponibilidad.
              Adicionalmente, estas instancias sirven una VPN para el acceso
              administrativo a VPC desde ubicaciones remotas.
            </li>
            <li>
              <b>Virtual Private Gateway y DirectConnect:</b> Para las
              comunicaciones con las oficinas de Interflora España de forma
              segura y con las máximas garantías de latencia y ancho de banda,
              se ha hecho uso de DirectConnect en conjunción con Virtual Private
              Gateway. El primero permite la comunicación directa desde las
              oficinas en España mediante infraestructuras de hardware
              dedicadas, mientras que el segundo proporciona un mecanismo
              totalmente gestionado para enlazar la red interna en VPC con el
              hardware dedicado en DirectConnect.
            </li>
            <li>
              <b>ELB:</b> Para minimizar la superficie de ataque expuesta en
              Internet se decidió reducir el número de instancias EC2 en
              subredes con acceso público al mínimo posible. Tanto es así, que
              únicamente las instancias de NAT y VPN Administrativa (una por
              zona de disponibilidad) son las únicas que cuentan con IPs
              públicas en toda la infraestructura. Todo el tráfico entrante
              correspondiente a la plataforma de E-Commerce se produce a través
              de los balanceadores de AWS, minimizando la superficie de ataque y
              centralizando la gestión de certificados SSL y algoritmos de
              cifrado.
            </li>
          </ol>
          <h3>Planes de Backup y Recuperación ante Desastres</h3>
          <p>
            Para simplificar el proceso de copias de seguridad y recuperación se
            ha hecho un uso intensivo de las capacidades que ofrece un servicio
            de cloud computing como Amazon Web Services:
          </p>
          <h4>
            <b>EC2 y EBS</b>
          </h4>
          <ol>
            <li>
              AMIs de todas las instancias preparadas para una eventual
              recuperación del servicio en caso de errores irrecuperables en las
              instancias de producción.
            </li>
            <li>Snapshot periódicos de volúmenes de datos.</li>
          </ol>
          <h4>
            <b>RDS y Elasticache</b>
          </h4>
          <ol>
            <li>
              Backup integrado basado en snapshots de volúmenes de
              almacenamiento
            </li>
            <li>
              Recuperación automática de la instancia en caso de errores graves
              que impidan restaurar el servicio.
            </li>
            <li>Replicación de datos integrada en el servicio</li>
          </ol>
          <h4>
            <b>S3 y Glacier</b>
          </h4>
          <ol>
            <li>
              Almacenamiento de backups de ficheros mediante tareas programadas
              desde las instancias EC2 dedicadas al almacenamiento de datos.
            </li>
            <li>
              Implementación de ciclos de vida para el archivado automático de
              backups en almacenamiento de bajo coste y eliminación de objetos
              antiguos.
            </li>
          </ol>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Interflora
