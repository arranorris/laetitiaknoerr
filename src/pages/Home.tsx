import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/HeroSlider';
import Specialties from '../components/Specialties';
import ColorBands from '../components/ColorBands';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Neuropsychologue à Colmar | Bilan TDAH, HPI et apprentissage - Laetitia Knoerr</title>
        <meta 
          name="description" 
          content="Laetitia Knoerr, neuropsychologue à Colmar, spécialisée dans le TDAH, HPI et les troubles de l'apprentissage. Bilans neuropsychologiques et accompagnement personnalisé." 
        />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>
      <HeroSlider />
      <Specialties />
      <ColorBands />
    </>
  );
}