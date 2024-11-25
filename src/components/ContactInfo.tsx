import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold font-lora text-dark mb-6">
        Informations pratiques
      </h2>

      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Adresse</h3>
            <p className="text-gray-600">
              123 Rue des Consultations<br />
              68000 Colmar
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Horaires d'ouverture</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Lundi - Vendredi : 9h - 19h</li>
              <li>Samedi : Sur rendez-vous</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Téléphone</h3>
            <a
              href="tel:+33123456789"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              01 23 45 67 89
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <a
              href="mailto:contact@laetitiaknoerr.fr"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              contact@laetitiaknoerr.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}