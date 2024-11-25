import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16">
      <Helmet>
        <title>Politique de confidentialité | Laetitia Knoerr - Neuropsychologue à Colmar</title>
        <meta 
          name="description" 
          content="Politique de confidentialité et protection des données personnelles du cabinet de neuropsychologie de Laetitia Knoerr à Colmar." 
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold font-lora text-dark mb-8">
            Politique de confidentialité
          </h1>

          <div className="prose prose-lg">
            <h2>1. Collecte des données personnelles</h2>
            <p>
              Les données personnelles collectées sur ce site sont uniquement utilisées dans le cadre de votre prise en charge thérapeutique ou pour répondre à vos demandes de contact. Ces informations incluent :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Motif de consultation</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <p>
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul>
              <li>Vous recontacter suite à une demande de rendez-vous</li>
              <li>Assurer votre suivi thérapeutique</li>
              <li>Vous envoyer des informations relatives à vos rendez-vous</li>
            </ul>

            <h2>3. Protection des données</h2>
            <p>
              Conformément au RGPD, nous mettons en œuvre toutes les mesures de sécurité nécessaires pour protéger vos données personnelles :
            </p>
            <ul>
              <li>Stockage sécurisé via Firebase</li>
              <li>Accès restreint aux données</li>
              <li>Chiffrement des communications</li>
            </ul>

            <h2>4. Vos droits</h2>
            <p>
              Vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul>
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
            </ul>

            <h2>5. Contact</h2>
            <p>
              Pour toute question concernant vos données personnelles, vous pouvez me contacter à l'adresse suivante : contact@laetitiaknoerr.fr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}