export interface ProjectImages {
  /** Primary screenshots (mobile app screens, or web screenshots for non-mobile projects) */
  mobile: string[];
  /** Admin panel / web dashboard screenshot(s) — only set for Mobile App projects that have one or more */
  admin?: string | string[];
}

/** Presentation type for a gallery image */
export type GalleryImageType = "mobile" | "web" | "admin";

export interface Project {
  id: number;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  role: string;
  status: string;
  clientProject: boolean;
  technologies: string[];
  features: string[];
  images: ProjectImages;
  liveUrl: string | null;
  playStoreUrl: string | null;
  githubUrl: string | null;
}
