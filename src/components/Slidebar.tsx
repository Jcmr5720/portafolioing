import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'preact/hooks';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['li1', 'li2', 'li3', 'li4'];
      let current = 'li1';
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < minDistance) {
            minDistance = rect.top;
            current = id;
          }
        }
      });

      const scrollBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight;
      if (scrollBottom) {
        current = 'projects';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="sidebar" data-aos="fade-right">
      <div>
        <h1>Juan Camilo Muñoz</h1>
        <h2>Ingeniero Mecánico</h2>
        <ul className="nav-links">
          <li><a href="#li1" className={activeSection === 'li1' ? 'active' : ''}>Acerca de</a></li>
          <li><a href="#li2" className={activeSection === 'li2' ? 'active' : ''}>Experiencia</a></li>
          <li><a href="#li3" className={activeSection === 'li3' ? 'active' : ''}>Estudios</a></li>
          <li><a href="#li4" className={activeSection === 'li4' ? 'active' : ''}>Habilidades</a></li>
        </ul>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/juan-camilo-mu%C3%B1oz-rodr%C3%ADguez-105a41275/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} />
        </a>
        <a href="https://wa.me/573154484804" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={22} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} />
        </a>
      </div>
    </aside>
  );
}
