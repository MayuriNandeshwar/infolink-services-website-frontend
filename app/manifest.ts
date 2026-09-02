import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Infolink Services | Software & IT Solutions',
    short_name: 'Infolink Services',
    description:
      'Engineering-focused custom software, web & mobile app, ERP/CRM, AI, and cloud solutions across India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0B1F3A',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
