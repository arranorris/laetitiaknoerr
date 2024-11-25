import { GraduationCap, Award, Heart } from 'lucide-react';

export default function AboutHero() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-lora text-dark sm:text-5xl">
            À propos de Laetitia Knoerr
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Neuropsychologue passionnée, je m'engage à accompagner chaque patient dans son parcours avec bienveillance et professionnalisme.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Formation",
              description: "Master en Neuropsychologie et Diplôme d'État"
            },
            {
              icon: Award,
              title: "Expertise",
              description: "Plus de 10 ans d'expérience en neuropsychologie"
            },
            {
              icon: Heart,
              title: "Approche",
              description: "Accompagnement personnalisé et bienveillant"
            }
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-lora text-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}