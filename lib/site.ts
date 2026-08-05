export const site = {
  name: 'Heavy Weight',
  tagline: 'Music Marketing & Record Label',
  description:
    'Heavy Weight is a premium music marketing agency and record label based in Cairo, Egypt. We build campaigns that turn records into movements.',
  url: 'https://heavyweight.agency',
  email: 'info@heavyweightmena.com',
  phone: '+201032517499',
  whatsapp: '201032517499',
  instagram: 'heavy_weight_eg',
  location: 'New Cairo, Cairo, Egypt',
} as const

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Heavy Weight, I'd like to talk about a campaign.",
)}`
export const instagramLink = `https://www.instagram.com/${site.instagram}`

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export type Service = {
  slug: string
  title: string
  icon: string
  summary: string
  detail: string
  deliverables: string[]
}

export type Project = {
  slug: string
  title: string
  artist: string
  category: string
  year: string
  image: string
  description: string
  results: Array<{ value: string; label: string }>
  services: string[]
}

export const services: Service[] = [
  {
    slug: 'music-marketing',
    title: 'Music Marketing',
    icon: 'Megaphone',
    summary:
      'End-to-end release strategy engineered around the audience that actually converts into fans.',
    detail:
      'We architect the full release cycle — pre-save funnels, teaser sequencing, creative direction and post-release retention — so every release lands with intent instead of hope.',
    deliverables: [
      'Release roadmap & rollout calendar',
      'Audience research & positioning',
      'Creative asset direction',
      'Weekly performance reporting',
    ],
  },
  {
    slug: 'digital-advertising',
    title: 'Digital Advertising',
    icon: 'Target',
    summary:
      'Paid media across Meta, Google and Spotify Ad Studio, optimised on cost-per-listener.',
    detail:
      'Media buying built for music economics. We test hooks at scale, kill what stalls, and scale the creatives that drive saves, streams and ticket sales.',
    deliverables: [
      'Full-funnel campaign architecture',
      'Creative testing framework',
      'Retargeting & lookalike audiences',
      'Live dashboards & attribution',
    ],
  },
  {
    slug: 'music-distribution',
    title: 'Music Distribution',
    icon: 'Globe2',
    summary:
      'Your catalogue delivered to 150+ stores worldwide with clean metadata and fast payouts.',
    detail:
      'Label-grade delivery to Spotify, Apple Music, Anghami, YouTube Music, Deezer and more — with correct splits, ISRC management and royalty transparency.',
    deliverables: [
      '150+ global stores & platforms',
      'Metadata & ISRC/UPC management',
      'Royalty splits & reporting',
      'Content ID & rights protection',
    ],
  },
  {
    slug: 'pr-campaigns',
    title: 'PR Campaigns',
    icon: 'Newspaper',
    summary:
      'Press, radio and editorial coverage across MENA and international music media.',
    detail:
      'We craft the narrative and place it — features, premieres, interviews and radio rotation with outlets your audience already trusts.',
    deliverables: [
      'Press kit & artist narrative',
      'Journalist & blog outreach',
      'Premiere & interview placement',
      'Radio servicing',
    ],
  },
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    icon: 'Users',
    summary:
      'Creator campaigns matched to your sound, from micro voices to regional headliners.',
    detail:
      'We source, brief and manage creators whose audiences overlap with yours, then turn the best-performing content into paid amplification.',
    deliverables: [
      'Creator sourcing & vetting',
      'Briefs, contracts & scheduling',
      'UGC amplification',
      'Sentiment & reach reporting',
    ],
  },
  {
    slug: 'youtube-promotion',
    title: 'YouTube Promotion',
    icon: 'Youtube',
    summary:
      'Channel growth, video SEO and pre-roll campaigns that build watch time, not vanity views.',
    detail:
      'Thumbnails, titles, chapters and pre-roll targeting tuned for retention — plus premiere strategy that stacks first-24-hour momentum.',
    deliverables: [
      'Channel audit & SEO',
      'Thumbnail & title testing',
      'Pre-roll / in-feed ad campaigns',
      'Premiere & shorts strategy',
    ],
  },
  {
    slug: 'tiktok-marketing',
    title: 'TikTok Marketing',
    icon: 'TikTok',
    summary:
      'Sound-first campaigns designed to make your hook the default audio of a trend.',
    detail:
      'We build the trend, seed it with the right creators, then push Spark Ads behind whatever catches. Sound pages become discovery engines.',
    deliverables: [
      'Hook & trend concepting',
      'Creator seeding waves',
      'Spark Ads amplification',
      'Sound page optimisation',
    ],
  },
]

export const stats = [
  { value: '480M+', label: 'Streams generated' },
  { value: '1,200+', label: 'Campaigns delivered' },
  { value: '38', label: 'Countries reached' },
  { value: '96%', label: 'Client retention' },
] as const

export const clients = [
  'ANGHAMI',
  'SPOTIFY MENA',
  'SONY MUSIC',
  'RED SEA LABEL',
  'CAIRO FM',
  'NILE RECORDS',
  'DEEZER',
  'TIKTOK MENA',
] as const

export const projects: Project[] = [
  {
    slug: '2007',
    title: '2007',
    artist: 'Shahyn',
    category: '360° Marketing Campaign',
    year: '2024',
    image: '/projects/shahyn-2007.PNG',

    description:
      'Led a 360° marketing campaign for Shahyn\'s "2007", introducing a fresh creative direction across TikTok, Instagram, YouTube, PR, and digital media. The campaign combined original content strategies that drove massive engagement across all platforms.',

    results: [
      { value: '#1', label: 'YouTube Trending Egypt' },
      { value: '#7', label: 'Global YouTube Trending' },
      { value: '360°', label: 'Marketing Campaign' },
    ],

    services: [
      'Creative Strategy',
      'Music Marketing',
      'TikTok Marketing',
      'Instagram Marketing',
      'YouTube Advertising',
      'PR & Media Coverage',
      'Creator Partnerships',
    ],
  },
  {
    slug: 'abo-el-anwar',
    title: 'Abo El Anwar',
    artist: 'Abo El Anwar',
    category: 'LONG-TERM MARKETING',
    year: '2023–present',
    image: '/projects/singer-cairo.png',
    description:
      'For over three years Heavy Weight and Abo El Anwar have sustained an always-on partnership: albums, music videos, daily social management, ongoing digital advertising, PR, and catalog-first strategy. The focus is continuous visibility, measurable audience growth, artist development and catalog performance—turning releases into sustained career momentum rather than isolated moments.',
    results: [
      { value: '3+ Years', label: 'Partnership' },
      { value: '20+', label: 'Campaigns Delivered' },
      { value: 'Always-On', label: 'Marketing' },
    ],
    services: [
      'Long-Term Marketing Strategy',
      'Artist Development',
      'Music Marketing',
      'Social Media Management',
      'Content Strategy',
      'Digital Advertising',
      'PR & Media Coverage',
      'Release Strategy',
      'Catalog Marketing',
      'Audience Growth',
    ],
  },
  {
    slug: 'north-coast-tour',
    title: 'A.L.A x FREEK',
    artist: 'A.L.A x FREEK',
    category: 'CROSS-BORDER CAMPAIGN',
    year: '2024',
    image: '/projects/live-tour.jpg',
    description:
      'Bringing A.L.A and FREEK together required market fluency. Heavy Weight crafted a Tunisia-first rollout—placements across leading Tunisian music pages, creator partnerships that honoured local culture, earned coverage in entertainment press, and regionally tuned platform campaigns. The collaboration translated cultural authenticity into sustained organic momentum across North Africa and the wider MENA.',
    results: [
      { value: '#1', label: 'YouTube Trending Tunisia' },
      { value: '3.3M+', label: 'YouTube Views' },
      { value: 'Regional PR Campaign', label: 'PR' },
    ],
    services: [
      'Cross-Border Marketing Strategy',
      'Tunisian Media Outreach',
      'PR & Entertainment Media',
      'Creator Partnerships',
      'Music Marketing',
      'Digital Advertising',
      'Social Media Marketing',
      'Platform Strategy',
    ],
  },

  {
    slug: 'catalogue-relaunch',
    title: 'ENTIFADA',
    artist: 'Mond',
    category: 'ARTIST REBRAND',
    year: '2024',
    image: '/projects/band-collective.png',
    description:
      'ENTIFADA marked the rebirth of Mohab as Mond—a full artist transformation that reset identity, tone and audience expectations. The album launch anchored a brand repositioning supported by platform-specific marketing, PR and sustained social programming. Over four years this approach delivered long-term audience growth, five Top‑20 YouTube tracks and a TikTok top‑10 moment, establishing Mond as a durable, market-ready artist brand.',
    results: [
      { value: '5', label: 'Top 20 YouTube Tracks' },
      { value: '#10', label: 'TikTok Trending Egypt' },
      { value: 'Complete', label: 'Artist Rebrand' },
    ],
    services: [
      'Artist Rebranding',
      'Brand Strategy',
      'Album Marketing',
      'Release Strategy',
      'Social Media Management',
      'Digital Advertising',
      'PR & Media Coverage',
      'Audience Growth',
    ],
  },
  {
    slug: 'nagham-saleh-tofan',
    title: 'TOFAN',
    artist: 'Nagham Saleh x Sulisizer',
    category: '360° Music Video Campaign',
    year: '2025',
    image: '/projects/tiktok-campaign.jpg',
    description:
      'Instead of traditional promotion, we built TOFAN into the fabric of internet culture. Influencers became the story, TikTok became the stage, and creators worldwide turned the hook into their own moments. When the song started trending organically, the campaign wasn\'t ours anymore - it belonged to everyone sharing it.',
    results: [
      { value: '700K+', label: 'TikTok Creations' },
      { value: '9.7M', label: 'YouTube Views' },
      { value: '#2', label: 'YouTube Trending Egypt' },
    ],
    services: [
      'Influencer Marketing',
      'TikTok Strategy',
      'Video Lyrics Distribution',
      'PR & Media Coverage',
      'Social Media Marketing',
      'Music Marketing',
    ],
  },
  {
    slug: 'analog-hearts',
    title: 'Analog Hearts',
    artist: 'The Delta Line',
    category: 'YouTube Growth',
    year: '2024',
    image: '/projects/band-collective.png',
    description:
      'Channel rebuild for an alternative four-piece: new thumbnail system, chaptered long-form uploads and pre-roll targeting against adjacent regional acts.',
    results: [
      { value: '+680%', label: 'Watch time' },
      { value: '124K', label: 'Subscribers gained' },
      { value: '7.2M', label: 'Views' },
    ],
    services: ['YouTube Promotion', 'Digital Advertising'],
  },
  {
    slug: 'mousv',
    title: 'Mousv',
    artist: 'Mousv',
    category: 'EXCLUSIVE PARTNERSHIP',
    year: '2021–Present',
    image: '/projects/studio-session.jpg',
    description:
      'Following an opening hit, Heavy Weight became Mousv\u2019s exclusive marketing partner. Over four years we developed platform-tailored strategies—TikTok campaigns, Instagram activations, Facebook community growth, creator partnerships, PR and performance marketing—delivering 20+ trending releases and sustained audience growth. The focus: long-term artist development, catalog resilience and consistent visibility across every platform.',
    results: [
      { value: '4+ Years', label: 'Partnership' },
      { value: '20+', label: 'Trending Releases' },
      { value: 'Exclusive', label: 'Marketing Partner' },
    ],
    services: [
      'Long-Term Marketing Strategy',
      'Exclusive Artist Partnership',
      'Release Strategy',
      'TikTok Marketing',
      'Instagram Marketing',
      'Facebook Community Marketing',
      'PR & Media Coverage',
      'Creator Partnerships',
      'Performance Marketing',
      'Music Marketing',
    ],
  },
]

export const testimonials = [
  {
    quote:
      'They treated our release like a product launch, not a post. Three weeks in we were on editorial playlists we had been pitching ourselves for two years.',
    name: 'Kareem X',
    role: 'Recording artist, Cairo',
  },
  {
    quote:
      'The reporting alone changed how we sign artists. For the first time we could see exactly which spend turned into real listeners.',
    name: 'Mona Fahmy',
    role: 'A&R Director, Nile Records',
  },
  {
    quote:
      'We sold out six shows on the North Coast with a budget our old agency said was impossible. Heavy Weight simply understands this market.',
    name: 'Yassin Adel',
    role: 'Manager, Sahara Collective',
  },
  {
    quote:
      'No fake streams, no vague promises. Just a plan, weekly numbers and a team that answers the phone at midnight before a drop.',
    name: 'Nour Halim',
    role: 'Singer-songwriter',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discovery',
    body: 'We audit your catalogue, audience data and past campaigns to find where the real demand already lives.',
  },
  {
    step: '02',
    title: 'Strategy',
    body: 'A written campaign architecture: positioning, channels, creative angles, budget allocation and success metrics.',
  },
  {
    step: '03',
    title: 'Execution',
    body: 'Our in-house team runs media, PR, creators and distribution in one coordinated rollout — nothing outsourced blindly.',
  },
  {
    step: '04',
    title: 'Scale',
    body: 'We double down on what performs, cut what does not, and turn the winning campaign into a repeatable system.',
  },
]
