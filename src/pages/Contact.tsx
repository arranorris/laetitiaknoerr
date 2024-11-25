import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact | Neuropsychologue à Colmar - Laetitia Knoerr</title>
        <meta 
          name="description" 
          content="Contactez Laetitia Knoerr, neuropsychologue à Colmar. Prenez rendez-vous pour un bilan TDAH, HPI ou troubles de l'apprentissage. Cabinet situé au centre de Colmar." 
        />
        <link rel="canonical" href={`${window.location.origin}/contact`} />
      </Helmet>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-lora text-dark mb-4">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}