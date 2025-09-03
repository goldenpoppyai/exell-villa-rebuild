import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import exellLogo from '@/assets/exell-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Property', href: '#property' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={exellLogo} alt="Exell Dream Estate" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-foreground">Villa Du Cacique</span>
              <span className="text-sm text-muted-foreground font-body">Exell Dream Estate</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-body text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="font-body">+1 (809) 555-0123</span>
            </div>
            <Button variant="default" size="sm" className="luxury-gradient text-primary-foreground font-body font-medium">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-body"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-body">+1 (809) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="font-body">info@exelldreamestate.com</span>
              </div>
              <div className="px-3 py-2">
                <Button className="w-full luxury-gradient text-primary-foreground font-body font-medium">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;