
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState('/images/logo2.png');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Listener para o evento personalizado de troca de logo
    const handleLogoChange = (event) => {
      setCurrentLogo(`/images/${event.detail}`);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('changeLogo', handleLogoChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('changeLogo', handleLogoChange); // <--- Remove o listener
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-transparent backdrop-blur-sm shadow-lg py-2" : "py-4"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4 py-[-20rem]">
        {isScrolled ? 
        <Link to="/" className="flex items-center ">
          <img 
            src={currentLogo} 
            alt="WALLARCANJO Logo"
            className="h-16 w-auto object-cover "
          />
        </Link>
        :
        <div></div>
        }

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-20">
          {[
            { name: 'Início', path: '/' },
            { name: 'Tatuadores', path: '/tatuadores' },
            { name: 'Cursos', path: '/cursos' },
            { name: 'Contato', path: '/contato' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "font-medium text-xl transition-colors relative py-2",
                isActive(item.path) 
                  ? "text-primary" 
                  : "text-gray-500 hover:text-primary"
              )}
            >
              {item.name}
              {isActive(item.path) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Início', path: '/' },
                { name: 'Tatuadores', path: '/tatuadores' },
                { name: 'Cursos', path: '/cursos' },
                { name: 'Contato', path: '/contato' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-medium text-xl py-2 transition-colors",
                    isActive(item.path) 
                      ? "text-primary" 
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
