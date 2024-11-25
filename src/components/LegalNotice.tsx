import { Helmet } from 'react-helmet-async';

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-background py-16">
      <Helmet>
        <title>Mentions légales | Laetitia Knoerr - Neuropsychologue à Colmar</title>
        <meta 
          name="description" 
          content="Mentions légales du cabinet de neuropsychologie de Laetitia Knoerr à Colmar." 
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold font-lora text-dark mb-8">
            Mentions légales
          </h1>

          <div className="prose prose-lg">
            <h2>Éditeur du site</h2>
            <p>
              Cabinet de Neuropsychologie Laetitia Knoerr<br />
              123 Rue des Consultations<br />
              68000 Colmar<br />
              Tél : 01 23 45 67 89<br />
              Email : contact@laetitiaknoerr.fr
            </p>

            <h2>Responsable de publication</h2>
            <p>
              Laetitia Knoerr<br />
              Neuropsychologue<br />
              N° ADELI : [Numéro à ajouter]
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Netlify Inc.<br />
              2325 3rd Street, Suite 215<br />
              San Francisco, CA 94107<br />
              United States
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d'auteur. Toute reproduction ou utilisation sans autorisation préalable est interdite.
            </p>

            <h2>Protection des données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-moi par email.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies techniques essentiels au fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}