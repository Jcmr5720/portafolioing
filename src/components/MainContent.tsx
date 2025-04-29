import { FaChevronRight, FaGraduationCap } from 'react-icons/fa';

export default function MainContent() {
  return (
    <main className="main-content">


      <section id="li1" data-aos="fade-up">
        <h2>Acerca de mí</h2>
        <p>Ingeniero mecánico con experiencia en la planificación y
          ejecución de proyectos, así como en la gestión de personal en entornos
          industriales, especialmente en plantas embotelladoras. Me adapto con facilidad al
          trabajo en equipo y participo activamente en el desarrollo de las tareas asignadas.
        </p><p>
          He liderado proyectos de fabricación y montaje de maquinaria industrial,
          incluyendo lavadoras de botellas, cajas,
          desempacadoras y pasteurizadoras. Además,
          tengo experiencia en la gestión completa de planes de mantenimiento en líneas de producción.</p>
      </section>

      <section id="li2" data-aos="fade-up" data-aos-delay="200">
        <h2>Experiencia Profesional</h2>

        <div className="experience-item">
          <h3>Coordinador de Mantenimiento - Fitness People</h3>
          <ul>
            <li><FaChevronRight /> Planificación y coordinación de mantenimiento preventivo y correctivo.</li>
            <li><FaChevronRight /> Supervisión de reparaciones mecánicas, eléctricas y locativas.</li>
            <li><FaChevronRight /> Gestión presupuestaria y coordinación de proveedores.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Supervisor de Mantenimiento (TLMO) - Coca-Cola FEMSA</h3>
          <ul>
            <li><FaChevronRight /> Supervisión de líneas operativas en planta embotelladora.</li>
            <li><FaChevronRight />Planificación y gestión de mantenimiento mediante SAP.</li>
            <li><FaChevronRight /> Verificación de estándares de seguridad y calidad.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Ingeniero de Proyectos - Maper S.A.</h3>
          <ul>
            <li><FaChevronRight /> Planificación semanal y diaria de producción y montaje.</li>
            <li><FaChevronRight /> Supervisión de fabricación y gestión eficiente de recursos.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Ingeniero de Proyectos - TCELMEC LTDA</h3>
          <ul>
            <li><FaChevronRight /> Planeación y supervisión de mantenimientos</li>
            <li><FaChevronRight /> Gestión logística y de inventarios para fabricación y mantenimiento.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Dibujante Técnico - Industrias Electromecánicas Acuña</h3>
          <ul>
            <li><FaChevronRight /> Diseño técnico de componentes industriales y supervisión en producción.</li>
            <li><FaChevronRight /> Control de calidad en procesos de fabricación.</li>
          </ul>
        </div>

      </section>

      <section id="li3" data-aos="fade-up" data-aos-delay="400" className="education-section">
        <h2>Formación Académica</h2>
        <ul className="education-list">
          <li><FaGraduationCap /> Ingeniería Mecánica - Universidad Industrial de Santander (UIS)</li>
          <li><FaGraduationCap /> Máster en Administración de Proyectos - ENEB</li>
        </ul>
      </section>
      <section id="li4" data-aos="fade-up" data-aos-delay="400" className="skills-section">
        <h2>Habilidades</h2>
        <ul className="skills-list">
          <li><FaChevronRight /> Habilidades blandas: Comunicación asertiva, trabajo en equipo, resiliencia, trabajo bajo presión, alta
            iniciativa, visión estratégica y adaptabilidad</li>
          <li><FaChevronRight /> Herramientas para planificación de recursos: SAP, SIESA y Microsoft Project.</li>
          <li><FaChevronRight /> Herramientas de diseño gráfico: Solidworks, Inventor y AutoCad.</li>
          <li><FaChevronRight /> Herramientas ofimáticas: Microsoft Excel.</li>
        </ul>
      </section>

    </main>
  );
}
