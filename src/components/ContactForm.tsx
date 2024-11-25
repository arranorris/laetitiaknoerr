import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Send } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  consent: boolean;
};

const consultationReasons = [
  'Bilan neuropsychologique',
  'TDAH',
  'Haut Potentiel Intellectuel',
  "Troubles de l'apprentissage",
  'Autre'
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!data.consent) {
      alert('Veuillez accepter la politique de confidentialité pour continuer.');
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...data,
        createdAt: new Date().toISOString()
      });
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="text-green-500 mb-4">
            <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-lora text-dark mb-4">
            Message envoyé avec succès !
          </h3>
          <p className="text-gray-600 mb-6">
            Je vous recontacterai dans les plus brefs délais.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="btn-primary"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Existing form fields... */}

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  type="checkbox"
                  {...register('consent', { 
                    required: 'Vous devez accepter la politique de confidentialité'
                  })}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="consent" className="text-sm text-gray-600">
                  J'accepte la{' '}
                  <a href="/privacy" className="text-primary hover:underline" target="_blank">
                    politique de confidentialité
                  </a>
                  {' '}et le traitement de mes données personnelles *
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
            ) : (
              <>
                <span>Envoyer le message</span>
                <Send className="h-5 w-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}