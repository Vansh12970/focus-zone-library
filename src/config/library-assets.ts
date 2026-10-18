/**
 * Central map of every image/video used on the site.
 *
 * To replace a photo: drop a file with the same name into the matching
 * folder under public/images/focus-zone-library/ — no code changes needed.
 * Missing files automatically render a neutral placeholder, never a
 * broken image. See public/images/focus-zone-library/README.md.
 */

const base = "/images/focus-zone-library";

export const libraryAssets = {
  branding: {
    logo: `${base}/branding/logo.png`,
    favicon: `${base}/branding/favicon.png`,
  },
  hero: `${base}/hero/hero-library.jpg`,
  interior: {
    readingRoom01: `${base}/interior/reading-room-01.jpg`,
    readingRoom02: `${base}/interior/reading-room-02.jpg`,
    studyDesks: `${base}/interior/study-desks.jpg`,
    entrance: `${base}/interior/entrance.jpg`,
  },
  facilities: {
    spaciousDesks: `${base}/facilities/spacious-desks.jpg`,
    bookStorage: `${base}/facilities/book-storage.jpg`,
    airConditioning: `${base}/facilities/air-conditioning.jpg`,
    readingEnvironment: `${base}/facilities/reading-environment.jpg`,
  },
  gallery: {
    gallery01: `${base}/gallery/gallery-01.jpg`,
    gallery02: `${base}/gallery/gallery-02.jpg`,
    gallery03: `${base}/gallery/gallery-03.jpg`,
    gallery04: `${base}/gallery/gallery-04.jpg`,
    gallery05: `${base}/gallery/gallery-05.jpg`,
    gallery06: `${base}/gallery/gallery-06.jpg`,
  },
  videos: {
    libraryTour: `${base}/videos/library-tour.mp4`,
    libraryAtmosphere: `${base}/videos/library-atmosphere.mp4`,
  },
} as const;

export type GalleryKey = keyof typeof libraryAssets.gallery;
