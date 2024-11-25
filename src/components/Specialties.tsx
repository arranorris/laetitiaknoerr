import { Brain, Lightbulb, BookOpen } from 'lucide-react';

const specialties = [
  {
    title: 'TDAH et troubles attentionnels',
    description: "Évaluation et accompagnement des troubles de l'attention avec ou sans hyperactivité, pour enfants et adultes.",
    icon: Brain,
  },
  {
    title: 'Bilan HPI',
    description: 'Identification et accompagnement des personnes à haut potentiel intellectuel pour une meilleure compréhension de leur fonctionnement.',
    icon: Lightbulb,
  },
  {
    title: "Suivi des troubles de l'apprentissage",
    description: "Diagnostic et prise en charge des difficultés d'apprentissage pour favoriser la réussite scolaire et professionnelle.",
    icon: BookOpen,
  },
];

export default function Specialties() {
  return (
    <div className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-lora text-dark sm:text-4xl">
            Mes Spécialités
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Une approche personnalisée pour répondre à vos besoins spécifiques
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <div
                key={specialty.title}
                className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-1"
              >
                <div className="text-primary mb-4">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold font-lora text-dark mb-4">
                  {specialty.title}
                </h3>
                <p className="text-gray-600">
                  {specialty.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}