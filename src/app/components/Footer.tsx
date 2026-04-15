import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-semibold text-white">Padel Costa</span>
            </div>
            <p className="text-sm text-gray-400">
              El mejor club de pádel de la costa. Canchas de primera calidad y
              reservas sin complicaciones.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-green-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/el-club" className="text-sm hover:text-green-400 transition-colors">
                  El Club
                </Link>
              </li>
              <li>
                <Link to="/precios" className="text-sm hover:text-green-400 transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/reservas" className="text-sm hover:text-green-400 transition-colors">
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Boulevard Ávila Camacho, Av Costa de Oro 3615 Esquina, Costa de Oro, 94299 Ver.</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>229 702 1964</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@padelcosta.com</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Mapa */}
            <div className="mt-6">
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 Padel Costa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
