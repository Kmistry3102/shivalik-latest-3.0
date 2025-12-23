export interface ProjectTypes {
  slug: string;
  projectName: string;
  firstHalf?: string;
  secondHalf?: string;
  bannerImage?: string;
  features?: FeaturesData[];
  gallery?: GalleryItems[];
  videos?: VideoItems[];
  about?: AboutData[];
  location?: LocationData[];
  amenitiesSubtitle?: string;
  ctaHeading?: string;
}

interface FeaturesData {
  feature?: string;
}

interface GalleryItems {
  img?: string;
}

interface VideoItems {
  title?: string;
  video?: string;
}

interface AboutData {
  img?: string;
  title?: string;
  subtitle?: string;
}

interface LocationData {
  img?: string;
  title?: string;
  subtitle?: string;
}
