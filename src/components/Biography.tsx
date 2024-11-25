export default function Biography() {
  return (
    <div className="bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg">
          <h2 className="text-3xl font-bold font-lora text-dark mb-8">
            Mon Parcours Professionnel
          </h2>
          
          <p className="text-gray-600 mb-6">
            Titulaire d'un Master en Neuropsychologie de l'Université de Strasbourg, j'ai développé une expertise approfondie dans l'évaluation et l'accompagnement des troubles neurodéveloppementaux. Ma formation continue inclut des certifications spécialisées en TDAH et HPI, me permettant d'offrir une prise en charge adaptée aux besoins spécifiques de chaque patient.
          </p>

          <p className="text-gray-600 mb-6">
            Mon parcours m'a amenée à travailler dans divers contextes cliniques, enrichissant ma pratique et ma compréhension des différents troubles cognitifs et comportementaux. Cette expérience variée me permet aujourd'hui d'proposer une approche globale et personnalisée à mes patients.
          </p>

          <h2 className="text-3xl font-bold font-lora text-dark my-8">
            Ma Philosophie de Travail
          </h2>

          <p className="text-gray-600 mb-6">
            Je crois profondément en une approche centrée sur la personne, où chaque patient est considéré dans sa globalité et sa singularité. Mon objectif est de créer un environnement sécurisant et bienveillant, propice à l'épanouissement et au progrès.
          </p>

          <p className="text-gray-600 mb-6">
            Ma pratique repose sur trois piliers fondamentaux :
          </p>

          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li className="mb-2">L'écoute active et la compréhension des besoins spécifiques de chaque patient</li>
            <li className="mb-2">L'utilisation d'outils et de méthodes d'évaluation validés scientifiquement</li>
            <li>L'accompagnement personnalisé pour développer des stratégies adaptées à chaque situation</li>
          </ul>

          <p className="text-gray-600">
            Je m'engage à maintenir une pratique professionnelle à jour, en suivant régulièrement des formations continues et en restant informée des dernières avancées dans le domaine de la neuropsychologie.
          </p>
        </div>
      </div>
    </div>
  );
}