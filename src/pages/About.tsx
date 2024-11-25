import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/AboutHero';
import Biography from '../components/Biography';

export default function About() {
  return (
    <>
      <Helmet>
        <title>À propos | Neuropsychologue Laetitia Knoerr à Colmar</title>
        <meta 
          name="description" 
          content="Découvrez le parcours de Laetitia Knoerr, neuropsychologue à Colmar. Expertise en TDAH, HPI et troubles de l'apprentissage. Formation et approche professionnelle." 
        />
        <link rel="canonical" href={`${window.location.origin}/about`} />
      </Helmet>
      <AboutHero />
      <Biography />
    </>
  );
}