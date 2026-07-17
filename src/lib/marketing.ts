export const featureList = [
  "Movie Collections",
  "TV Shows",
  "Smart Metadata",
  "Continue Watching",
  "Offline Playback",
  "Favorites",
  "Categories",
  "Smart Search",
  "Beautiful Posters",
  "Watch Progress",
  "Subtitles",
  "Recently Added",
];

export const faqItems = [
  {
    q: "What is an offline media library?",
    a: "An offline media library is a structured collection of downloaded movies, TV episodes, and personal videos stored on your device or external drive. Instead of browsing messy folders, a good offline movie library uses consistent naming, posters, metadata, and search so you can find and play anything quickly — with or without internet.",
  },
  {
    q: "How do I organize downloaded movies on Android?",
    a: "Start with a simple top-level structure: Movies, TV Shows, and Personal Videos. Name each movie folder as Movie Title (Year), keep quality tags at the end of filenames, and use a movie organizer app like MyBinge to scan folders, fetch posters, and surface Continue Watching and Recently Added rows.",
  },
  {
    q: "Can I organize downloaded movies without internet?",
    a: "Yes. File organization, folder scanning, and offline playback work without internet. MyBinge is designed offline-first — internet is optional when you want to refresh posters, trailers, or metadata from TMDB.",
  },
  {
    q: "Is MyBinge a good movie collection app for local files?",
    a: "MyBinge is built specifically as a movie collection app for Android users who store files locally. It turns disconnected downloads into browsable collections with posters, categories, favorites, and watch progress — without requiring a home server or complex setup.",
  },
  {
    q: "Does MyBinge work as a video library app for USB and external storage?",
    a: "Yes. MyBinge supports local paths and removable media on compatible Android devices, making it a practical video library app for phone storage, SD cards, and USB drives connected through OTG adapters.",
  },
  {
    q: "Does MyBinge work with TV shows and episodes?",
    a: "Yes. You can group episodes by season, track watch progress per episode, and continue from where you stopped. This makes it easier to manage long-running series alongside your downloaded movie library.",
  },
  {
    q: "How is MyBinge different from Plex, Jellyfin, or Kodi?",
    a: "Plex, Jellyfin, and Kodi are powerful but often require server setup, plugins, or desktop configuration. MyBinge focuses on lightweight Android-first playback: scan local folders, match metadata, and browse with a Netflix-like interface — ideal if you want a personal Netflix experience without running a media server.",
  },
  {
    q: "Is MyBinge a good alternative to VLC or MX Player?",
    a: "VLC and MX Player excel at raw file playback. MyBinge adds library management — posters, smart search, collections, continue watching, and TV season grouping — so you spend less time hunting files and more time watching.",
  },
  {
    q: "Can I use MyBinge on Android TV?",
    a: "Yes. MyBinge is designed for big screens and Android TV devices, with navigation and layouts that work from your couch — the same offline library you manage on phone, presented for TV viewing.",
  },
  {
    q: "How does movie metadata and poster matching work?",
    a: "MyBinge uses TMDB metadata to fetch posters, overviews, and trailers. Consistent folder names like Movie Title (Year) improve automatic matching; you can also fix mismatches manually when a download uses non-standard naming.",
  },
  {
    q: "What video formats does MyBinge support?",
    a: "MyBinge supports common offline formats including MKV, MP4, and AVI — the formats most movie collectors and download workflows produce.",
  },
  {
    q: "How do I build a personal Netflix from downloaded movies?",
    a: "Organize files into stable folders, normalize filenames, let MyBinge scan and enrich metadata, then browse by posters, categories, and Continue Watching. Pair a phone library with Android TV for a personal Netflix-style experience entirely from your own files.",
  },
  {
    q: "What is the best movie folder structure for metadata matching?",
    a: "Use one folder per title formatted as Movie Title (Year), with the primary video file inside mirroring that name. Keep TV shows in Show Name/Season 01/episode files. Avoid deep genre trees — use metadata filters instead of physical genre folders.",
  },
  {
    q: "Can I manage personal and family videos alongside movies?",
    a: "Yes. Keep personal videos in a dedicated top-level folder. MyBinge treats them as part of your offline media library so travel clips, family recordings, and downloaded films live in one searchable app.",
  },
  {
    q: "Do I need a subscription to use MyBinge?",
    a: "No subscription is required to organize and play your own local media. MyBinge is free to install from Google Play and focuses on your files — not a streaming catalog.",
  },
];

/** Subset shown on homepage; full list lives on /faq */
export const homeFaqItems = faqItems.slice(0, 8);

export const homeSeoSections = [
  {
    title: "Why an offline media library beats a folder full of downloads",
    paragraphs: [
      "Most people start with good intentions: a Downloads folder, maybe a few genre subfolders, and filenames copied straight from the source. That works until the collection grows. Suddenly you are scrolling through ambiguous names, duplicate copies, and mixed quality tags — and finding the right movie takes longer than watching it.",
      "An offline media library solves this by applying structure once, then letting software handle discovery. The goal is not perfection on day one; it is a repeatable system where every new file lands in a predictable place, gets a readable name, and appears in search with the correct poster and watch progress.",
      "Whether you are a movie collector archiving rips, a student with lecture recordings, or a family keeping travel videos alongside films, the same principles apply: stable top-level folders, consistent naming, and an app that treats your files like a streaming catalog instead of a file browser.",
    ],
  },
  {
    title: "How to organize downloaded movies for long-term scale",
    paragraphs: [
      "The best movie organizer workflow is boring on purpose. Create three top-level buckets — Movies, TV Shows, Personal Videos — and resist the urge to split everything by genre on disk. Genre, mood, and decade work better as metadata filters inside your video library app than as physical folder boundaries.",
      "For each movie, use Movie Title (Year) as the folder name and mirror that in the primary filename. Keep quality and source tags at the end (for example 1080p or x265) so human readers and metadata engines both understand the title. This single convention prevents most poster mismatches before they happen.",
      "Maintenance matters more than the initial cleanup. Set a weekly ten-minute routine: ingest new downloads, run them through a filename formatter, scan with MyBinge, and fix any metadata outliers. Small recurring effort beats an annual multi-day reorganisation project.",
    ],
  },
  {
    title: "Movie collection apps vs playing files in VLC",
    paragraphs: [
      "VLC and MX Player remain excellent when you already know exactly which file to open. They are playback tools, not library managers. The gap appears when you have hundreds of titles and want Continue Watching, poster grids, season lists, and search that understands movie names instead of torrent filenames.",
      "A dedicated movie collection app adds a catalog layer on top of your files. MyBinge scans folders you choose — including USB and external storage on supported Android devices — matches titles to posters and descriptions, and presents everything in a familiar streaming-style interface.",
      "You keep full ownership of your files. Nothing is uploaded to a cloud catalog. Internet is optional and mainly used when you want fresher metadata or trailers. Playback, browsing, and progress tracking work offline once your library is indexed.",
    ],
  },
  {
    title: "Building a personal Netflix with local video files",
    paragraphs: [
      "A personal Netflix is not a hack or a grey-area stream — it is your own curated catalog, stored where you control it, playable on your schedule. Downloaded movies and TV episodes you already own or have rights to use become rows of posters, categories, and recommendations driven by your watch history.",
      "The experience improves dramatically on Android TV. Phone and tablet libraries sync through your account so the same Continue Watching row appears on the big screen. Family members can browse separate profiles while sharing the same underlying folder structure on a drive or NAS path the app can reach.",
      "MyBinge is designed for this workflow: lightweight setup, offline-first playback, smart metadata, and layouts that feel at home on both phone and TV. If you have been managing a growing download collection manually, this is the fastest path from folders to a library you actually enjoy opening.",
    ],
  },
  {
    title: "Who this site is for",
    paragraphs: [
      "OfflineMediaLibrary.com publishes practical guides, comparison pages, and free tools for Android users building offline movie libraries — movie collectors, anime archivists, families with personal videos, and anyone outgrowing VLC-style file browsing.",
      "Use our guides to design folder structures, normalize filenames, and fix metadata issues. Use our tools to format names and plan collections before you scan. When you are ready for daily playback, install MyBinge from Google Play and connect the folders you have already organized.",
    ],
  },
];
