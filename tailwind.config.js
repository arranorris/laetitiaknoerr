/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#4A90E2', // Main primary
          600: '#357ABD',
          700: '#2B6CB0',
          800: '#1E429F',
          900: '#233876',
        },
        secondary: {
          50: '#F0FDF9',
          100: '#CCFBEF',
          200: '#A1D6C2', // Main secondary
          300: '#8CD7C5',
          400: '#57C4A7',
          500: '#31B189',
          600: '#2A9D7A',
          700: '#238A6A',
          800: '#1C7759',
          900: '#15634A',
        },
        background: '#F5F5F5',
        dark: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#2D2D2D', // Main dark
          900: '#111827',
        },
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark.800'),
            maxWidth: '100%',
            h1: {
              fontFamily: 'Lora, serif',
              color: theme('colors.dark.800'),
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              marginBottom: '1.5rem',
            },
            h2: {
              fontFamily: 'Lora, serif',
              color: theme('colors.dark.800'),
              fontWeight: '600',
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontFamily: 'Lora, serif',
              color: theme('colors.dark.800'),
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              color: theme('colors.dark.600'),
              lineHeight: '1.75',
              marginBottom: '1.25rem',
            },
            'ul > li': {
              color: theme('colors.dark.600'),
              marginBottom: '0.5rem',
              paddingLeft: '1.5rem',
            },
            'ol > li': {
              color: theme('colors.dark.600'),
              marginBottom: '0.5rem',
              paddingLeft: '1.5rem',
            },
            a: {
              color: theme('colors.primary.500'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.200'),
              backgroundColor: theme('colors.primary.50'),
              padding: '1rem 1.5rem',
              marginBottom: '1.5rem',
              color: theme('colors.dark.600'),
              fontStyle: 'italic',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
          },
        },
      }),
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};