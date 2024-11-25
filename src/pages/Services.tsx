import { Helmet } from 'react-helmet-async';
import ServiceHero from '../components/ServiceHero';
import ServicesList from '../components/ServicesList';
import ServiceCTA from '../components/ServiceCTA';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>TDAH, HPI, Neuropsychologie à Colmar | Bilans et remédiation cognitive</title>
        <meta 
          name="description" 
          content="Services de neuropsychologie à Colmar : bilans TDAH, tests HPI, accompagnement des troubles de l'apprentissage. Remédiation cognitive personnalisée." 
        />
        <link rel="canonical" href={`${window.location.origin}/services`} />
      </Helmet>
      <ServiceHero />
      <ServicesList />
      <ServiceCTA />
    </>
  );
}