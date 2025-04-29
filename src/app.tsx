import { useEffect } from 'preact/hooks';
import Sidebar from './components/Slidebar';
import MainContent from './components/MainContent';
import './styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, behavior: 'auto' });

    const moveBackground = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.backgroundPosition = `${x}% ${y}%`;
    };

    window.addEventListener('mousemove', moveBackground);
    return () => window.removeEventListener('mousemove', moveBackground);
  }, []);



  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}
