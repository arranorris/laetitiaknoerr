import CMS from 'decap-cms-app';
import { fr } from 'date-fns/locale';

// Initialize the CMS
CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
      commit_messages: {
        create: 'Create {{collection}} "{{slug}}"',
        update: 'Update {{collection}} "{{slug}}"',
        delete: 'Delete {{collection}} "{{slug}}"',
        uploadMedia: 'Upload "{{path}}"',
        deleteMedia: 'Delete "{{path}}"',
      },
    },
    load_config_file: false,
    media_folder: 'public/uploads/images',
    public_folder: '/uploads/images',
    media_library: {
      name: 'uploadcare',
      config: {
        publicKey: 'your-uploadcare-public-key',
      },
    },
    locale: 'fr',
    site_url: window.location.origin,
    display_url: window.location.origin,
    logo_url: '/logo.svg',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            name: 'home',
            label: 'Accueil',
            file: 'src/content/pages/home.md',
            fields: [
              { label: 'Hero Title', name: 'heroTitle', widget: 'string' },
              { label: 'Hero Subtitle', name: 'heroSubtitle', widget: 'string' },
              { label: 'Hero Image', name: 'heroImage', widget: 'image' },
              {
                label: 'Specialties',
                name: 'specialties',
                widget: 'list',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Icon', name: 'icon', widget: 'select', options: ['Brain', 'Lightbulb', 'BookOpen'] },
                ],
              },
              {
                label: 'SEO',
                name: 'seo',
                widget: 'object',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                ],
              },
            ],
          },
          {
            name: 'about',
            label: 'À propos',
            file: 'src/content/pages/about.md',
            fields: [
              { label: 'Title', name: 'title', widget: 'string' },
              { label: 'Introduction', name: 'introduction', widget: 'text' },
              { label: 'Biography', name: 'biography', widget: 'markdown' },
              {
                label: 'Qualifications',
                name: 'qualifications',
                widget: 'list',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                ],
              },
              {
                label: 'SEO',
                name: 'seo',
                widget: 'object',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                ],
              },
            ],
          },
          {
            name: 'services',
            label: 'Services',
            file: 'src/content/pages/services.md',
            fields: [
              { label: 'Title', name: 'title', widget: 'string' },
              { label: 'Introduction', name: 'introduction', widget: 'text' },
              {
                label: 'Services List',
                name: 'servicesList',
                widget: 'list',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Icon', name: 'icon', widget: 'select', options: ['Brain', 'Target', 'Lightbulb', 'BookOpen'] },
                  { label: 'Details', name: 'details', widget: 'list' },
                ],
              },
              {
                label: 'SEO',
                name: 'seo',
                widget: 'object',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'blog',
        label: 'Articles',
        folder: 'src/content/blog',
        create: true,
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Publish Date', name: 'date', widget: 'datetime' },
          { label: 'Featured Image', name: 'image', widget: 'image' },
          { label: 'Excerpt', name: 'excerpt', widget: 'text' },
          { label: 'Category', name: 'category', widget: 'select', options: ['TDAH', 'HPI', 'Apprentissage'] },
          { label: 'Tags', name: 'tags', widget: 'list' },
          { label: 'Body', name: 'body', widget: 'markdown' },
          {
            label: 'SEO',
            name: 'seo',
            widget: 'object',
            fields: [
              { label: 'Title', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' },
            ],
          },
        ],
      },
      {
        name: 'settings',
        label: 'Paramètres',
        files: [
          {
            name: 'general',
            label: 'Paramètres généraux',
            file: 'src/content/settings/general.md',
            fields: [
              { label: 'Site Title', name: 'siteTitle', widget: 'string' },
              { label: 'Site Description', name: 'siteDescription', widget: 'text' },
              {
                label: 'Contact Info',
                name: 'contactInfo',
                widget: 'object',
                fields: [
                  { label: 'Email', name: 'email', widget: 'string' },
                  { label: 'Phone', name: 'phone', widget: 'string' },
                  { label: 'Address', name: 'address', widget: 'string' },
                ],
              },
              {
                label: 'Social Media',
                name: 'socialMedia',
                widget: 'object',
                fields: [
                  { label: 'Facebook', name: 'facebook', widget: 'string', required: false },
                  { label: 'LinkedIn', name: 'linkedin', widget: 'string', required: false },
                  { label: 'Twitter', name: 'twitter', widget: 'string', required: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

// Register the French locale
CMS.registerLocale('fr', {
  ...fr,
  dateFormat: 'dd/MM/yyyy',
  timeFormat: 'HH:mm',
});