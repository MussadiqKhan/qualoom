import React from "react"
import { Helmet } from "react-helmet"
import "../styles/legal.css"
import Header from "../components/header"
import Footer from "../components/footer"

const Cookies = () => {
  return (
    <div>
      <Helmet>
        <title>Politica de Cookies - Qualoom</title>
        <meta
          name="description"
          content="Politica de Cookies Qualoom- Por encima de todo, claridad y honestidad"
        />
      </Helmet>
      <div
        className="background-legal"
        style={{
          background: `url(../../images/iot-robotica-software-1.jpg)`,
        }}
      >
        <div className="header_div">
          <Header />
        </div>
        <div className="main">
          <div className="empty"></div>
          <div className="text">
            <h1>Por encima de todo, claridad y </h1>
            <h1>honestidad</h1>
            <p>
              Consulta nuestro Aviso legal, Política de Privacidad y Política de
              Cookies. Las hemos preparado para que sean sencillas, claras y
              concisas.
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <p>
          <b>Política de Cookies</b>
        </p>
        <br />
        <p>
          Una cookie es un pequeño fichero de texto que se almacena en su
          navegador cuando visita casi cualquier página web. Su utilidad es que
          la web sea capaz de recordar su visita cuando vuelva a navegar por esa
          página. Las cookies suelen almacenar información de carácter técnico,
          preferencias personales, personalización de contenidos, estadísticas
          de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc. El
          objetivo de la cookie es adaptar el contenido de la web a su perfil y
          necesidades, sin cookies los servicios ofrecidos por cualquier página
          se verían mermados notablemente.
        </p>
        <br />
        <p>
          <b>Cookies utilizadas en este sitio web</b>
          <br />
          <br />
          Siguiendo las directrices de la Agencia Española de Protección de
          Datos procedemos a detallar el uso de cookies que hace esta web con el
          fin de informarle con la máxima exactitud posible.
          <br />
          <br />
          Este sitio web utiliza las siguientes <b>cookies propias</b>:
          <br />
          <br />
          <b>1.</b> Cookies de sesión, para garantizar que los usuarios que
          escriban comentarios en el blog sean humanos y no aplicaciones
          automatizadas. De esta forma se combate el spam.
          <br />
          <br />
          Este sitio web utiliza las siguientes <b>cookies de terceros</b>:
          <br />
          <br />
          <b>1.</b> Google Analytics: Almacena cookies para poder elaborar
          estadísticas sobre el tráfico y volumen de visitas de esta web. Al
          utilizar este sitio web está consintiendo el tratamiento de
          información acerca de usted por Google. Por tanto, el ejercicio de
          cualquier derecho en este sentido deberá hacerlo comunicando
          directamente con Google.
          <br />
          <br />
          <b>2.</b> Redes sociales: Cada red social utiliza sus propias cookies
          para que usted pueda pinchar en botones del tipo Me gusta o Compartir.
          <br />
          <br />
          <b>Desactivación o eliminación de cookies</b>
          <br />
          <br />
          En cualquier momento podrá ejercer su derecho de desactivación o
          eliminación de cookies de este sitio web. Estas acciones se realizan
          de forma diferente en función del navegador que esté usando. Aquí le
          dejamos una guía rápida para los navegadores más populares.
          <br />
          <br />
          <b>Notas adicionales</b>
          <br />
          <br />
          <b>1.</b> Ni esta web ni sus representantes legales se hacen
          responsables ni del contenido ni de la veracidad de las políticas de
          privacidad que puedan tener los terceros mencionados en esta política
          de cookies. <br />
          <br />
          <b>2.</b> Los navegadores web son las herramientas encargadas de
          almacenar las cookies y desde este lugar debe efectuar su derecho a
          eliminación o desactivación de las mismas. Ni esta web ni sus
          representantes legales pueden garantizar la correcta o incorrecta
          manipulación de las cookies por parte de los mencionados navegadores.{" "}
          <br />
          <br />
          <b>3.</b> En algunos casos es necesario instalar cookies para que el
          navegador no olvide su decisión de no aceptación de las mismas. <br />
          <br />
          <b>4.</b> En el caso de las cookies de Google Analytics, esta empresa
          almacena las cookies en servidores ubicados en Estados Unidos y se
          compromete a no compartirla con terceros, excepto en los casos en los
          que sea necesario para el funcionamiento del sistema o cuando la ley
          obligue a tal efecto. Según Google no guarda su dirección IP. Google
          Inc. es una compañía adherida al Acuerdo de Puerto Seguro que
          garantiza que todos los datos transferidos serán tratados con un nivel
          de protección acorde a la normativa europea. Si desea información
          sobre el uso que Google da a las cookies le adjuntamos este otro
          enlace.
          <br />
          <br /> <b>5.</b> Para cualquier duda o consulta acerca de esta
          política de cookies no dude en comunicarse con nosotros a través de la
          sección de contacto.
          <br />
          <br />
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Cookies
