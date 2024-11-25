import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <div className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold font-lora text-white mb-8">
          Contactez-moi pour plus d'informations ou pour planifier un rendez-vous
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <div className="flex space-x-6">
            <a
              href="tel:+33123456789"
              className="text-white hover:text-gray-200 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>01 23 45 67 89</span>
            </a>
            <a
              href="mailto:contact@laetitiaknoerr.fr"
              className="text-white hover:text-gray-200 transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>contact@laetitiaknoerr.fr</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}