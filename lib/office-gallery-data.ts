export interface OfficeGalleryImage {
  src: string;
  alt: string;
}

// Full set of office photos, used by the standalone /company-gallery page
// (kept live for SEO/deep-linking per Phase 13A). The About page's
// "Our Workplace" preview section pulls a curated subset of these same
// images rather than defining its own list, so captions and file paths
// stay in exactly one place.
export const OFFICE_GALLERY_IMAGES: OfficeGalleryImage[] = [
  { src: '/office/IMG_1746.jpeg', alt: 'Infolink Services — main entrance' },
  { src: '/office/IMG_1748.jpeg', alt: 'Infolink Services — reception entrance' },
  { src: '/office/IMG_1747.jpeg', alt: 'Office entrance signage' },
  { src: '/office/IMG_1739.jpeg', alt: 'Reception corner' },
  { src: '/office/IMG_1743.jpeg', alt: 'Workstation area' },
  { src: '/office/IMG_1744.jpeg', alt: 'Workstation area — alternate view' },
  { src: '/office/IMG_1745.jpeg', alt: 'Workstation row' },
  { src: '/office/IMG_1749.jpeg', alt: 'Meeting and conference table' },
  { src: '/office/IMG_1742.jpeg', alt: 'Breakout and relaxation space' },
  { src: '/office/IMG_1740.jpeg', alt: 'Breakout space — detail view' },
];

// Curated 6-image preview shown inside the About page's "Our Workplace"
// section — a representative slice of the full gallery above.
export const OFFICE_GALLERY_PREVIEW: OfficeGalleryImage[] = [
  OFFICE_GALLERY_IMAGES[0],
  OFFICE_GALLERY_IMAGES[3],
  OFFICE_GALLERY_IMAGES[4],
  OFFICE_GALLERY_IMAGES[7],
  OFFICE_GALLERY_IMAGES[8],
  OFFICE_GALLERY_IMAGES[6],
];
