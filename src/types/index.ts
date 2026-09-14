export type NavPreview =
  | { type: 'image'; src: string }
  | { type: 'text'; content: string };

export interface Link {
  title: string;
  href: string;
  thumbnail: string;
  target?: string;
  /** Explicit preview to show in the nav panel when this link is hovered */
  preview?: NavPreview;
}
