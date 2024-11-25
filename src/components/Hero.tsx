import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-dark sm:text-5xl md:text-6xl font-lora">
                <span className="block">Neuropsychologue à Colmar</span>
                <span className="block text-primary mt-3">Laetitia Knoerr</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Spécialisée dans l'évaluation et l'accompagnement des enfants et adultes présentant des troubles neurodéveloppementaux (TDAH), haut potentiel intellectuel (HPI) et troubles de l'apprentissage.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="/contact" className="btn-primary flex items-center space-x-2">
                    <span>Prenez rendez-vous dès aujourd'hui</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
          alt="Cabinet de consultation moderne et accueillant"
        />
      </div>
    </div>
  );
}