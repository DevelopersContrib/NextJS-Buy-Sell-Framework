/** Shared CTAs — zinc primary + blue accents (light surfaces) */

const ringOffsetLight =
  "focus:tw-ring-offset-2 focus:tw-ring-offset-white";

export const btnPrimaryDarkSurface =
  `tw-rounded-lg tw-bg-zinc-900 tw-text-white tw-font-semibold tw-transition-colors ` +
  `hover:tw-bg-zinc-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500/45 ${ringOffsetLight}`;

export const btnPrimaryDarkSurfaceFull =
  `${btnPrimaryDarkSurface} tw-w-full tw-py-4 tw-px-6`;

export const btnPrimaryDarkSurfaceGrid =
  `${btnPrimaryDarkSurface} tw-py-4 tw-px-6`;

const secondaryOutlineLight =
  `tw-rounded-lg tw-border tw-border-zinc-300 tw-bg-white tw-font-semibold tw-text-zinc-700 ` +
  `tw-transition-colors hover:tw-bg-zinc-50 focus:tw-outline-none focus:tw-ring-2 ` +
  `focus:tw-ring-blue-500/35 ${ringOffsetLight}`;

export const btnSecondaryDarkSurfaceGrid = `${secondaryOutlineLight} tw-py-4 tw-px-6`;
