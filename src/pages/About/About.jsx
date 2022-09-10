import React from 'react'
import {
  PhoneOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'
import Luis from '../../assets/jpg/luis2.jpg'
import CV from '../../assets/pdf/CVLuisEmilio.pdf'
import './About.scss'

export default function About() {
  return (
    <div>
      <div className="cv">
        <div className="cv-left">
          <img className="cv-left-img-luis" src={Luis} alt="" />

          <h2>Luis Emilio</h2>
          <h3>Desarrollador web</h3>

          <hr />

          <h2>Contacto</h2>
          <div className="cv-left-contact">
            <PhoneOutlined className="cv-left-contact-icon" />
            <h3>+57 3125523854</h3>
          </div>

          <div className="cv-left-contact">
            <MailOutlined className="cv-left-contact-icon" />
            <h3>luisegrijalba8@gmail.com</h3>
          </div>

          <div className="cv-left-contact">
            <GithubOutlined className="cv-left-contact-icon" />
            <h3>https://github.com/grijalbaEmilio</h3>
          </div>

          <div className="cv-left-contact">
            <LinkedinOutlined className="cv-left-contact-icon" />
            <h3>www.linkedin.com/in/grijalbaEmilio</h3>
          </div>

          <hr />

          <h2>En tiempo libre</h2>

          <ul>
            <li>
              <p> Profundización en sistemas oporativos tipo linux. </p>
            </li>
            <li>
              <p> Profundización en lenguaje y comandos bash. </p>
            </li>
          </ul>
        </div>

        <div className="cv-right">
          <h2>Lenguajes y frameworks</h2>

          <div className="cv-right-languages">
            <ul>
              <li>
                <p> JavaScript </p>
              </li>
              <li>
                <p> Java </p>
              </li>
              <li>
                <p> Python </p>
              </li>
              <li>
                <p> HTML5 </p>
              </li>
              <li>
                <p> CSS3 </p>
              </li>
              <li>
                <p> Tailwind </p>
              </li>
              <li>
                <p> Bootstrap </p>
              </li>
            </ul>

            <ul>
              <li>
                <p> Node.js </p>
              </li>
              <li>
                <p> React </p>
              </li>
              <li>
                <p> Vue </p>
              </li>
              <li>
                <p> Express </p>
              </li>
              <li>
                <p> Flask </p>
              </li>
              <li>
                <p> MongoDB </p>
              </li>
              <li>
                <p> SQL Server </p>
              </li>
            </ul>
          </div>

          <hr />

          <h2>Datos académicos</h2>
          <h3>Universidad de Caldas</h3>
          <p>Ingeniería de Sistemas y computación | actual</p>

          <br />

          <h3>Escuela normal Superior Nuestra Señora de la Candelaria</h3>
          <p>Bachillerato | 8 Diciembre 2019</p>

          <hr />

          <h2>Perfil</h2>
          <p>Desarrollador frontEnd, backEnd o fullStack.</p>
        </div>
      </div>

      <a href={CV} className="download" download="CVLuisEmilio">
        <button type="button" className="download">
          Descargar
        </button>
      </a>
    </div>
  )
}
