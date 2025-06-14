import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-rose-300">
              MAS Services
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Professionele secretariële diensten, administratieve ondersteuning en notuleerservice in Boxtel.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p>Weikespad 5</p>
              <p>5283 NA Boxtel</p>
              <p>T: 06-36374035</p>
              <p>E: info@mas-services.nl</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Diensten</h4>
            <div className="text-gray-300 space-y-2">
              <Link to="/secretarieel" className="block hover:text-rose-300 transition-colors">
                Secretarieel
              </Link>
              <Link to="/administratie" className="block hover:text-rose-300 transition-colors">
                Administratie
              </Link>
              <Link to="/notuleerservice" className="block hover:text-rose-300 transition-colors">
                Notuleerservice
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Volg mij</h4>
            <div className="text-gray-300 space-y-2">
              <a 
                href="https://www.linkedin.com/in/gidi-kroonen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-rose-300 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MAS Services. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
