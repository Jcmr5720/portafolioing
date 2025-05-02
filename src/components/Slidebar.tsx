import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'preact/hooks';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('li1');

  const handleClick = (id: string) => (event: MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['li1', 'li2', 'li3', 'li4'];
      let newActive = activeSection;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            newActive = id;
            break;
          }
        }
      }

      if (newActive !== activeSection) {
        setActiveSection(newActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <aside className="sidebar" data-aos="fade-right">
      <div>
        <h1>Juan Camilo Muñoz</h1>
        <h2>Ingeniero Mecánico</h2>
        <ul className="nav-links">
          {['li1', 'li2', 'li3', 'li4'].map((id, index) => {
            const labels = ['Acerca de', 'Experiencia', 'Estudios', 'Habilidades'];
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={handleClick(id)}
                >
                  {labels[index]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/juancamilomunozr/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
