import { Brain, Lightbulb, BookOpen, Target } from 'lucide-react';

const services = [
  {
    title: 'Bilan neuropsychologique',
    icon: Brain,
    description: 'Évaluation complète des fonctions cognitives pour enfants, adolescents et adultes.',
    details: [
      'Évaluation des capacités intellectuelles',
      'Analyse des fonctions attentionnelles et exécutives',
      'Évaluation de la mémoire et des apprentissages',
      'Rapport détaillé avec recommandations personnalisées'
    ]
  },
  {
    title: 'Suivi et remédiation cognitive',
    icon: Target,
    description: "Accompagnement personnalisé pour les troubles de l'apprentissage.",
    details: [
      "Programmes d'entraînement cognitif sur mesure",
      "Stratégies d'apprentissage adaptées",
      'Suivi régulier des progrès',
      'Coordination avec les autres professionnels'
    ]
  },
  {
    title: 'Accompagnement HPI',
    icon: Lightbulb,
    description: 'Support spécialisé pour les enfants et adolescents à haut potentiel.',
    details: [
      'Identification du profil cognitif',
      'Gestion des particularités émotionnelles',
      'Adaptation scolaire et sociale',
      'Soutien à la parentalité'
    ]
  },
  {
    title: 'Gestion du TDAH',
    icon: BookOpen,
    description: "Prise en charge des troubles attentionnels et de l'hyperactivité.",
    details: [
      'Évaluation approfondie des symptômes',
      'Stratégies de compensation',
      'Techniques de gestion du quotidien',
      'Accompagnement familial et scolaire'
    ]
  }
];

export default function ServicesList() {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`flex flex-col lg:flex-row gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="text-primary mb-4">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h2 className="text-2xl font-bold font-lora text-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <h3 className="text-xl font-semibold font-lora text-dark mb-6">
                    Ce service comprend :
                  </h3>
                  <ul className="space-y-4">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}