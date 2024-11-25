import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-lora font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+33123456789" className="flex items-center space-x-2 hover:text-primary-500 transition-colors">
                <Phone className="h-5 w-5" />
                <span>01 23 45 67 89</span>
              </a>
              <a href="mailto:contact@laetitiaknoerr.fr" className="flex items-center space-x-2 hover:text-primary-500 transition-colors">
                <Mail className="h-5 w-5" />
                <span>contact@laetitiaknoerr.fr</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Rue des Consultations, Colmar</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-lora font-semibold mb-4">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p>Lundi - Vendredi : 9h - 19h</p>
                  <p>Samedi : Sur rendez-vous</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-lora font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-primary-500 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-primary-500 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Laetitia Knoerr. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}