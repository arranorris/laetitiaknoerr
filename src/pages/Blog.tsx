import { Helmet } from 'react-helmet-async';
import BlogList from '../components/BlogList';

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog Neuropsychologie | TDAH, HPI et apprentissage - Laetitia Knoerr</title>
        <meta 
          name="description" 
          content="Articles et ressources sur la neuropsychologie, le TDAH, le HPI et les troubles de l'apprentissage. Conseils et informations par Laetitia Knoerr, neuropsychologue à Colmar." 
        />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
      </Helmet>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-lora text-dark mb-4">
            Blog Neuropsychologie
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos articles sur la neuropsychologie, le TDAH, le HPI et les troubles de l'apprentissage
          </p>
        </div>
      </div>
      <BlogList />
    </div>
  );
}