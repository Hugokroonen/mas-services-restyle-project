
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
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
              <Link to="/secretarieel" className="block hover:text-blue-400 transition-colors">
                Secretarieel
              </Link>
              <Link to="/administratie" className="block hover:text-blue-400 transition-colors">
                Administratie
              </Link>
              <Link to="/notuleerservice" className="block hover:text-blue-400 transition-colors">
                Notuleerservice
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MAS Services. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
