import { useState } from 'preact/hooks';
import './News.css';

const NEWS_CONTENT = {
  Medicina: {
    title: 'Convocatoria a Posgrados de Medicina 2022-2023',
    titleBtn: 'CONVOCATORIA A POSGRADOS DE MEDICINA 2022-2023',
    image: '/images/convocatorias-medicina-UMG.jpg',
    body: 'La Facultad de Ciencias Médicas y de la Salud, en colaboración con el Ministerio de Salud Pública y Asistencia Social (MSPAS), Centro Médico Militar (CMM) y el Instituto Guatemalteco de Seguridad Social     (IGGS) invita a participar en la convocatoria de Posgrados 2023.',
    href: 'https://umg.edu.gt/medicina/posgrados/convocatorias',
  },
  Evaluacion: {
    title:
      'Evaluación externa con fines de acreditación internacional para la Facultad de Ciencias Médicas y de la Salud',
    titleBtn:
      'EVALUACIÓN EXTERNA CON FINES DE ACREDITACIÓN INTERNACIONAL PARA LA FACULTAD DE CIENCIAS MÉDICAS Y DE LA SALUD',
    image: '/images/evaluacion_facultad_medicina_umg.jpeg',
    body: 'Hoy 18 de mayo del 2022, se llegó al cierre del proceso de evaluación externa con fines de Acreditación, de la Facultad de Ciencias Médicas (sede central). Aparecen en la fotografía: Dr. Arturo García Rillo y Dra. Diana Rivera Grados, miembros del equipo asignado para visita, y autoridades de la Facultad.',
    href: 'https://umg.edu.gt/noticia/facultad-medicina-evaluacion',
  },
  Bonilla: {
    title: 'Alumno Destacado Dr. Mario González Bonilla',
    titleBtn: 'ALUMNO DESTACADO, DR. MARIO GONZÁLEZ BONILLA',
    image: '/images/dr-mario-bonilla.jpg',
    body: 'El Dr. Mario González Bonilla, originario del departamento de Huehuetenango, ingresó a la facultad de Odontología de la Universidad Mariano Gálvez campus central, en la tercera promoción en el año 1991.',
    href: 'https://umg.edu.gt/noticias/2022/03/16/Alumno-Destacado',
  },
  Beca: {
    title: 'Convocatoria a beca Fulbright LASPAU 2023',
    titleBtn: 'POSTÚLATE: CONVOCATORIA A BECA FULBRIGHT LASPAU 2023',
    image: '/images/IG_Laspau_2022.png',
    body: 'La beca Fulbright Laspau ofrece a profesores universitarios guatemaltecos la oportunidad de obtener una maestría en una universidad de los Estados Unidos. Este es un programa altamente competitivo. Presiona aquí.',
    href: 'https://umg.edu.gt/noticia/beca-Fulbright-LASPAU-2023',
  },
  Inauguracion: {
    title: 'Acto inaugural de ciclo académico 2022',
    titleBtn: 'ACTO INAUGURAL DE CICLO ACADÉMICO 2022',
    image: '/images/56Anios.png',
    body: 'Acompáñanos en la transmisión de nuestro acto inaugural del ciclo académico 2022. Presiona aquí.',
    href: 'https://umg.edu.gt/ciclo2022',
  },
  Bicentario: {
    title: 'Bicenentario de Centroamérica',
    titleBtn: 'BICENTENARIO DE CENTROAMÉRICA',
    image: '/images/bicentenario_portada.jpg',
    body: 'Actividades en conmemoración de la Independencia de Centroamérica. Presiona aquí.',
    href: 'https://umg.edu.gt/bicentenario',
  },
  ConvenioCMM: {
    title: 'Convocatoria Posgrados Ciencias Médicas y de la Salud 2021-2022',
    titleBtn: 'CONVENIO POSGRADOS UMG-CMM 2020-2021',
    image: '/images/noticias-convocatoria.png',
    body: 'IGGS, MSPAS, CMM y UMG invitan a la convocatoria de Posgrados de Medicina 2021-2022',
    href: 'https://umg.edu.gt/medicina/posgrados/convocatorias',
  },
  Derecho: {
    title: 'Facultad de Ciencias Jurídicas y Sociales',
    titleBtn: 'POSGRADOS DERECHO UMG-OJ 2021',
    image: '/images/maest-conv.png',
    body: 'Convenio Marco de Cooperación Académica ente El Organismo Judicial y Universidad Mariano Gálvez de Guatemala para la Implementación de y Desarrollo de Posgrados en Derecho marzo 2021.',
    href: 'https://umg.edu.gt/derecho#carreras',
  },
  Revista: {
    title: 'Facultad de Ciencias Jurídicas y Sociales',
    titleBtn: 'LANZAMIENTO DE REVISTA DOCTOR MARIANO GÁLVEZ',
    image: '/images/Revista-Juridica-Dr-Mariano-Galvez.png',
    body: 'El pasado 21 de octubre se realizó la presentación oficial de la Revista que fue transmitida a través de Internet.',
    href: 'https://umg.edu.gt/noticias/2020/11/13/revista-dr-mariano-galvez',
  },
  Universidad: {
    title: 'Universidad',
    titleBtn: 'RECOMENDACIONES DEL SERVICIO SISMOLÓGICO DE GUATEMALA DE LA UMG ANTE EL COVID19',
    image: '/images/sismogt-umg-covid19.jpeg',
    body: 'Consulta algunas recomendaciones por parte del Servicio Sismológico de Guatemala.',
    href: 'https://umg.edu.gt/noticias/2020/11/16/recomendaciones-ssg-covid19',
  },
};

function New({ title, image, body, href }) {
  return (
    <a href={href} class='link-to-new'>
      <h4 class='title-new'>{title}</h4>
      <img src={image} alt='' />
      <p class='description-new'>{body}</p>
    </a>
  );
}

export default function News() {
  const [newSrc, setNewSrc] = useState(NEWS_CONTENT.Medicina);

  const changeNew = ({ newSrc }) => {
    setNewSrc(newSrc);
  };

  return (
    <section class='news-section'>
      <img src='/images/ipad.png' class='ipad' alt='' />
      <div class='options'>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Medicina })}>
          {NEWS_CONTENT.Medicina.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Evaluacion })}>
          {NEWS_CONTENT.Evaluacion.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Bonilla })}>
          {NEWS_CONTENT.Bonilla.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Beca })}>
          {NEWS_CONTENT.Beca.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Inauguracion })}>
          {NEWS_CONTENT.Inauguracion.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Bicentario })}>
          {NEWS_CONTENT.Bicentario.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.ConvenioCMM })}>
          {NEWS_CONTENT.ConvenioCMM.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Derecho })}>
          {NEWS_CONTENT.Derecho.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Revista })}>
          {NEWS_CONTENT.Revista.titleBtn}
        </button>
        <button class='options-btn' onClick={() => changeNew({ newSrc: NEWS_CONTENT.Universidad })}>
          {NEWS_CONTENT.Universidad.titleBtn}
        </button>
      </div>
      <div class='content'>
        <h3 class='title-news-section'>Noticias</h3>
        <New {...newSrc} />
      </div>
    </section>
  );
}
