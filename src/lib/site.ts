export const siteConfig = {
  name: "OfflineMediaLibrary.com",
  brandName: "MyBinge",
  tagline: "Offline Media Library",
  description:
    "Build and organize a beautiful offline media library for downloaded movies, TV shows, and personal videos.",
  domain: "https://offlinemedialibrary.com",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.mybinge.app",
  linkedInContactUrl:
    "https://www.linkedin.com/messaging/compose?recipient=iamsharmadeepak",
  assets: {
    brandMark: "/brand-mark.png",
    brandMarkTrimmed: "/brand-mark.png",
    logoLockup: "/logo-lockup.png",
    logoTagline: "/brand/logo-tagline-source.png",
    googlePlayBadge: "/badges/google-play.png",
    heroDevices: "/hero-devices.png",
    icons: {
      features: {
        organize: "/icons/features/organize.png",
        library: "/icons/features/library.png",
        play: "/icons/features/play.png",
        track: "/icons/features/track.png",
        search: "/icons/features/search.png",
        favorites: "/icons/features/favorites.png",
        customize: "/icons/features/customize.png",
      },
      hub: {
        guides: "/icons/hub/guides.png",
        comparisons: "/icons/hub/comparisons.png",
        tools: "/icons/hub/tools.png",
        blog: "/icons/hub/blog.png",
      },
    },
    screenshots: {
      mobileHome: "/screenshots/mobile-home.png",
      mobileLogin: "/screenshots/mobile-login.png",
      mobileSettings: "/screenshots/mobile-settings.png",
      mobileVideos: "/screenshots/mobile-videos.png",
      tvHome: "/screenshots/tv-home.png",
      tvLogin: "/screenshots/tv-login.png",
      tvMovies: "/screenshots/tv-movies.png",
      tvSettings: "/screenshots/tv-settings.png",
    },
  },
  nav: [
    { href: "/features", label: "Features" },
    { href: "/guides", label: "Guides" },
    { href: "/comparisons", label: "Comparisons" },
    { href: "/tools", label: "Tools" },
    { href: "/blog", label: "Blog" },
  ],
  downloadNav: { href: "/download", label: "Download App" },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
